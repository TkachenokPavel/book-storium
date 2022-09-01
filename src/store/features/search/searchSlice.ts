import { createSlice } from "@reduxjs/toolkit";
import { IBookShort } from "../../../types/types";

type SearchState = {
    books: IBookShort[];
    error: null | string;
    isLoading: boolean;
}

const initialState: SearchState = {
    books: [],
    error: null,
    isLoading: false
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {}
})

export const { } = searchSlice.actions;

export default searchSlice.reducer;