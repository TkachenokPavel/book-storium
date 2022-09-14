import {
  setIsLoading,
  setUser,
  removeUser,
  removeIsLoading,
  setError,
} from "./features/authentication/authenticationSlice";
import { fetchBookDetails } from "./features/bookDetails/bookDetailsSlice";
import {
  clearCart,
  addItem,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "./features/cart/cartSlice";
import { addFavorite, removeFavorite } from "./features/favorite/favoriteSlice";
import { fetchNewBooks } from "./features/newBooks/newBooksSlice";
import { setSearchValue, removeState, fetchSearchedBooks } from "./features/search/searchSlice";

import { useAppDispatch, useAppSelector } from "./hooks/index";

import { getUser, getBookDetails, getCart, getFavorite, getNewBooks, getSearch } from "./selectors";

export {
  setIsLoading,
  setUser,
  removeUser,
  removeIsLoading,
  setError,
  clearCart,
  addItem,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addFavorite,
  removeFavorite,
  fetchNewBooks,
  setSearchValue,
  removeState,
  fetchSearchedBooks,
  useAppDispatch,
  useAppSelector,
  getUser,
  getBookDetails,
  getCart,
  getFavorite,
  getNewBooks,
  getSearch,
  fetchBookDetails,
};
