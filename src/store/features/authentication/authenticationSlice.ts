import { createSlice } from "@reduxjs/toolkit";

type userData = {
  email: string | null;
  created: string | null;
};

type authenticationState = {
  currentUser: userData;
  error: null | string;
  isLoading: boolean;
};

const initialState: authenticationState = {
  currentUser: {
    email: null,
    created: null,
  },
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
    setUser(state, { payload }) {
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
    setError(state, { payload }) {
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
