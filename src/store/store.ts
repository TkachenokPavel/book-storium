import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import newBooksReducer from "./features/newBooks/newBooksSlice";
import bookDetailsReducer from "./features/bookDetails/bookDetailsSlice";
import authenticationReducer from "./features/authentication/authenticationSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        newBooks: newBooksReducer,
        bookDetails: bookDetailsReducer,
        search: searchReducer,
        authentication: authenticationReducer,
        favorite: favoriteReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store };