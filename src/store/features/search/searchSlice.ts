import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookAPI } from "../../../services";
import { ISearchedBooksResponse } from "../../../types/types";
import { isPendingAction, isRejectedAction } from "../../utils";

type SearchState = {
  searchValue: string | null;
  searchResponse: ISearchedBooksResponse;
  error: string | null;
  isLoading: boolean;
};

type SearchParams = {
  searchValue: string | null;
  page?: string | null;
};

const initialState: SearchState = {
  searchValue: null,
  searchResponse: {
    error: null,
    total: null,
    page: null,
    books: [],
  },
  error: null,
  isLoading: false,
};

export const fetchSearchedBooks = createAsyncThunk<
  ISearchedBooksResponse,
  SearchParams,
  { rejectValue: string }
>("search/fetchSearchedBooks", async (searchParams: SearchParams, { rejectWithValue }) => {
  try {
    return await bookAPI.getSearchedBooks(searchParams.searchValue, searchParams.page);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    removeState: (state) => {
      state.searchValue = null;
      state.isLoading = false;
      state.error = null;
      state.searchResponse.books = [];
      state.searchResponse.error = null;
      state.searchResponse.page = null;
      state.searchResponse.total = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchedBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.searchResponse.books = payload.books;
      state.searchResponse.error = payload.error;
      state.searchResponse.page = payload.page;
      state.searchResponse.total = payload.total;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setSearchValue, removeState } = searchSlice.actions;

export default searchSlice.reducer;
