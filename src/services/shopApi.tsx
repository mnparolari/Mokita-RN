import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../firebase';
import { Product } from '../models';

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
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi