import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from '../features/Shop/ShopSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../services/shopApi';
import CartSlice from '../features/Cart/CartSlice';
import { authApi } from '../services/authApi';
import AuthSlice from '../features/Auth/AuthSlice';

const store = configureStore({
    reducer: {
        shop: ShopSlice,
        cart: CartSlice,
        auth: AuthSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store