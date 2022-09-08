import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookAPI } from "../../../services";
import { SearchedBooksResponse } from "../../../types/types";
import { isPendingAction, isRejectedAction } from "../../utils";

type SearchState = {
    searchValue: string | null,
    searchResponse: SearchedBooksResponse,
    error: string | null,
    isLoading: boolean,
}

type SearchParams = {
    searchValue: string | null,
    page?: string | null
}

const initialState: SearchState = {
    searchValue: null,
    searchResponse: {
        error: null,
        total: null,
        page: null,
        books: [],
    },
    error: null,
    isLoading: false
};

export const fetchSearchedBooks = createAsyncThunk<
    SearchedBooksResponse,
    SearchParams,
    { rejectValue: string }
>('search/fetchSearchedBooks',
    async (searchParams: SearchParams, { rejectWithValue }) => {
        try {
            return await bookAPI.getSearchedBooks(searchParams.searchValue, searchParams.page)
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.message)
        }
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, { payload }) => {
            state.searchValue = payload;
        },
        removeSearchValue: (state) => {
            state.searchValue = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchSearchedBooks.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.searchResponse.books = payload.books;
            state.searchResponse.error = payload.page;
            state.searchResponse.page = payload.page;
            state.searchResponse.total = payload.total;
        });
        builder.addMatcher(isPendingAction, state => {
            state.isLoading = true;
            state.error = null
        })
        builder.addMatcher(isRejectedAction, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    },
})

export const { setSearchValue, removeSearchValue, } = searchSlice.actions;

export default searchSlice.reducer;