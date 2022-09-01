import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import newBooksReducer from "./features/newBooks/newBooksSlice";
import bookDetailsReducer from "./features/bookDetails/bookDetailsSlice";

const store = configureStore({
    reducer: {
        newBooks: newBooksReducer,
        bookDetails: bookDetailsReducer,
        search: searchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store };