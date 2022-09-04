import { createSlice } from "@reduxjs/toolkit";

type authenticationState = {
    email: string | null,
    error: null | string,
    isLoading: boolean,
}

const initialState: authenticationState = {
    email: null,
    error: null,
    isLoading: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setIsLoading(state) {
            state.email = null;
            state.error = null;
            state.isLoading = true;
        },
        removeIsLoading(state) {
            state.email = null;
            state.error = null;
            state.isLoading = false;
        },
        setUser(state, { payload }) {
            state.email = payload;
            state.error = null;
            state.isLoading = false;
        },
        removeUser(state) {
            state.email = null;
            state.error = null;
            state.isLoading = false;
        },
        setError(state, { payload }) {
            state.email = null;
            state.error = payload;
            state.isLoading = false;
        }
    },
});

export const { setIsLoading, setUser, removeUser, removeIsLoading, setError } = authenticationSlice.actions;

export default authenticationSlice.reducer
