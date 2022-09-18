import { RootState } from "../store";

export const getSearch = (state: RootState) => state.persistedReducer.search;
