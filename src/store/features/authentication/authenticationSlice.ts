import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../../components/SignIn/SignIn";

type userData = {
  email: string | null;
  created: string | null;
};

type theme = "dark" | "light";

type authenticationState = {
  currentUser: userData;
  theme: theme;
  error: null | string;
  isLoading: boolean;
};

const initialState: authenticationState = {
  currentUser: {
    email: null,
    created: null,
  },
  theme: "light",
  error: null,
  isLoading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.currentUser.email = null;
      state.currentUser.created = null;
      state.error = null;
      state.isLoading = true;
    },
    removeIsLoading(state) {
      state.currentUser.email = null;
      state.currentUser.created = null;
      state.error = null;
      state.isLoading = false;
    },
    setUser(state, { payload }: PayloadAction<UserData>) {
      state.currentUser.email = payload.email;
      state.currentUser.created = payload.created;
      state.error = null;
      state.isLoading = false;
    },
    removeUser(state) {
      state.currentUser.email = null;
      state.currentUser.created = null;
      state.error = null;
      state.isLoading = false;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.currentUser.email = null;
      state.currentUser.created = null;
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setUser, removeUser, removeIsLoading, setError } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
