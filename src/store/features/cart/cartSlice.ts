import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails, ICartItem } from "../../../types/types";
import { getPriceAsNumber } from "../../../utils";

type CartState = {
    cartItems: ICartItem[],
    total: number | null,
    amount: number | null,
}

const initialState: CartState = {
    cartItems: [],
    total: null,
    amount: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addItem: (state, { payload }: PayloadAction<IBookDetails>) => {
            const cartItem = state.cartItems.find((item) => item.isbn13 === payload.isbn13);
            if (cartItem) {
                cartItem.amount = cartItem.amount + 1;
            } else {
                const newItem = {
                    ...payload,
                    amount: 1
                };
                state.cartItems.push(newItem)
            }
        },
        removeItem: (state, { payload }: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(item => item.isbn13 !== payload)
        },
        increase: (state, { payload }: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.isbn13 === payload);
            if (cartItem) {
                cartItem.amount = cartItem.amount + 1;
            }
        },
        decrease: (state, { payload }: PayloadAction<string>) => {
            const cartItem = state.cartItems.find((item) => item.isbn13 === payload);
            if (cartItem) {
                cartItem.amount = cartItem.amount - 1;
            }
        },
        calculateTotals: (state) => {
            state.amount = state.cartItems.reduce((amount, item) => {
                return amount += item.amount
            }, 0);
            state.total = state.cartItems.reduce((total, item) => {
                return total += getPriceAsNumber(item.price) * item.amount
            }, 0);
        },
    },
});

export const { clearCart, addItem, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer