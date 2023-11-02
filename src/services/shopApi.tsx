import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../firebase';
import { OrdersCart, Product } from '../models';

type shopApi = ReturnType<typeof createApi>;

export const shopApi = createApi({
    reducerPath: 'shopApi' as 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCategories: builder.query<string[], void>({
            query: () => 'categories.json',
        }),
        getProducts: builder.query<Product[], void>({
            query: () => 'products.json',
        }),
        getProductsByCategory: builder.query<Product[], string>({
            query: category => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getOrders: builder.query<OrdersCart[], string>({
            query: userOrder => `orders.json?orderBy="user"&equalTo="${userOrder}"`,
        }),
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
                url: 'orders.json',
                method: 'POST',
                body: order,
            })
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image
                }
            })
        })
    })
})

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetOrdersQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi