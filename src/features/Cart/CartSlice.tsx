import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../models";
import { Alert } from 'react-native';


const initialState: CartState = {
    id: "",
    user: "",
    updatedAt: new Date().toLocaleString(),
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.items.find(item => item.id === productToAdd.id);
            if (existingProduct) {
                Alert.alert('Producto en el carrito', 'Este producto ya ha sido agregado al carrito.');
            } else {
                state.items.push({ ...productToAdd });
                state.total = state.items.reduce(
                    (acc, current) => acc + current.price * current.quantity,
                    0
                );
            }
            state.updatedAt = new Date().toLocaleString();
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );
            const total = state.items.reduce((acc, current) => acc + current.price * current.quantity, 0);
            state.total = total;
        },
        removeAll: (state) => {
            return {
                ...state,
                items: [],
                total: 0, 
                updatedAt: new Date().toLocaleString(),
            };
        },
        addUser: (state, action) => {
            state.user = action.payload
        },
        clearUserCart: () => {
            return {
                id: "",
                user: "",
                updatedAt: "",
                items: [],
                total: 0,
            }
        },
    }
})

export const { addItem, removeItem, addUser, removeAll, clearUserCart } = cartSlice.actions

export default cartSlice.reducer
