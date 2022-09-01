import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import newBooksReducer from "./features/newBooks/newBooksSlice";

const store = configureStore({
    reducer: {
        newBooks: newBooksReducer,
        search: searchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store };