import { createSlice } from "@reduxjs/toolkit";
import { IBookDetails } from "../../../types/types";

type FavoriteState = {
  favorites: IBookDetails[];
};

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((item) => item.isbn13 !== payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
