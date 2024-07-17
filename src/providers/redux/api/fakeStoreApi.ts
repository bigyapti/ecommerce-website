import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    // Products
    getProducts: builder.query<any, void>({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getLimitedProducts: builder.query({
      query: (limit) => `products?limit=${limit}`,
    }),
    getSortedProducts: builder.query({
      query: (order) => `products?sort=${order}`,
    }),
    getProductCategories: builder.query({
      query: () => "products/categories",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    // Carts
    getCarts: builder.query({
      query: () => "carts",
    }),
    getCart: builder.query({
      query: (id) => `carts/${id}`,
    }),
    getLimitedCarts: builder.query({
      query: (limit) => `carts?limit=${limit}`,
    }),
    getSortedCarts: builder.query({
      query: (order) => `carts?sort=${order}`,
    }),
    getCartsByDateRange: builder.query({
      query: ({ startDate, endDate }) =>
        `carts?startdate=${startDate}&enddate=${endDate}`,
    }),
    getUserCarts: builder.query({
      query: (userId) => `carts/user/${userId}`,
    }),
    addCart: builder.mutation({
      query: (newCart) => ({
        url: "carts",
        method: "POST",
        body: newCart,
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id, updatedCart }) => ({
        url: `carts/${id}`,
        method: "PUT",
        body: updatedCart,
      }),
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),
    //User
    getUsers: builder.query<any, void>({
      query: () => "users",
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    getLimitedUsers: builder.query({
      query: (limit) => `users?limit=${limit}`,
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: updatedUser,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    // Login
    userLogin: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetLimitedProductsQuery,
  useGetSortedProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCartsQuery,
  useGetCartQuery,
  useGetLimitedCartsQuery,
  useGetSortedCartsQuery,
  useGetCartsByDateRangeQuery,
  useGetUserCartsQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useGetLimitedUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUserLoginMutation,
} = fakeStoreApi;
