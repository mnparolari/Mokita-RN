import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from '../features/Shop/ShopSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../services/shopApi';

const store = configureStore({
    reducer: {
        shop: ShopSlice,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch);



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store