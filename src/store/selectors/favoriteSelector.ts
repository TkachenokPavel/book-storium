import { RootState } from "../store";

export const getFavorite = (state: RootState) => state.persistedReducer.favorite;
