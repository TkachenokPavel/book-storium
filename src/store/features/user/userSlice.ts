import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
    id: string,
    name: string,
    age: number
}

const initialState: IUserState = {
    id: '123',
    name: 'Lean',
    age: 37
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        generateNewId: (state) => {
            state.id = Math.random().toString(36)
        }
    }
})

export const { generateNewId } = userSlice.actions;

export default userSlice.reducer;