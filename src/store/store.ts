import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import newBooksReducer from "./features/newBooks/newBooksSlice";
import bookDetailsReducer from "./features/bookDetails/bookDetailsSlice";
import authenticationReducer from "./features/authentication/authenticationSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";
import cartReducer from "./features/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["bookDetails"],
};

const rootReducer = combineReducers({
  newBooks: newBooksReducer,
  bookDetails: bookDetailsReducer,
  search: searchReducer,
  authentication: authenticationReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
