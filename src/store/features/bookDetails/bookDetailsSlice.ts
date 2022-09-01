import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "../../../services";
import { IBookDetails } from "../../../types/types";
import { isPendingAction, isRejectedAction } from "../../utils";

type BookDetailsState = {
    book: IBookDetails,
    error: null | string,
    isLoading: boolean,
}

const initialState: BookDetailsState = {
    book: {
        authors: '',
        desc: '',
        error: '',
        image: '',
        isbn10: '',
        isbn13: '',
        language: '',
        pages: '',
        pdf: {},
        price: '',
        publisher: '',
        rating: '',
        subtitle: '',
        title: '',
        url: '',
        year: '',
    },
    error: null,
    isLoading: false,
}

export const fetchBookDetails = createAsyncThunk<
    IBookDetails,
    string,
    { rejectValue: string }
>('bookDetails/fetchBookDetails',
    async (isbn: string, { rejectWithValue }) => {
        try {
            return await bookAPI.getBookDetails(isbn)
        } catch (error) {
            return rejectWithValue('Server error')
        }
    }
)

const bookDetailsSlice = createSlice({
    name: 'bookDetails',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.book = action.payload;
        });
        builder.addMatcher(isPendingAction, state => {
            state.error = null;
            state.isLoading = true;
        })
        builder.addMatcher(isRejectedAction, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    },
});

export default bookDetailsSlice.reducer