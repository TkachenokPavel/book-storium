import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookAPI } from "../../../services";
import { IBookShort } from "../../../types/types";
import { isPendingAction, isRejectedAction } from "../../utils";

type NewBooksState = {
  books: IBookShort[];
  error: null | string;
  isLoading: boolean;
};

const initialState: NewBooksState = {
  books: [],
  error: null,
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<IBookShort[], undefined, { rejectValue: string }>(
  "newBooks/fetchNewBooks",
  async (_, { rejectWithValue }) => {
    try {
      return await bookAPI.getNewBooks();
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default newBooksSlice.reducer;
