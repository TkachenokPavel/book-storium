import { createSlice } from "@reduxjs/toolkit";

type userData = {
    email: string | null,
    created: string | null,
}

type authenticationState = {
    user: userData,
    error: null | string,
    isLoading: boolean,
}

const initialState: authenticationState = {
    user: {
        email: null,
        created: null,
    },
    error: null,
    isLoading: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setIsLoading(state) {
            state.user.email = null;
            state.user.created = null;
            state.error = null;
            state.isLoading = true;
        },
        removeIsLoading(state) {
            state.user.email = null;
            state.user.created = null;
            state.error = null;
            state.isLoading = false;
        },
        setUser(state, { payload }) {
            state.user.email = payload.email;
            state.user.created = payload.created;
            state.error = null;
            state.isLoading = false;
        },
        removeUser(state) {
            state.user.email = null;
            state.user.created = null;
            state.error = null;
            state.isLoading = false;
        },
        setError(state, { payload }) {
            state.user.email = null;
            state.user.created = null;
            state.error = payload;
            state.isLoading = false;
        }
    },
});

export const { setIsLoading, setUser, removeUser, removeIsLoading, setError } = authenticationSlice.actions;

export default authenticationSlice.reducer
