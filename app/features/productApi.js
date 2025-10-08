import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/products`,
        credentials: "include"
    }),
    tagTypes: ["products"],
    endpoints: (builder) => ({

        // GET ALL PRODUCTS
        getAllProducts: builder.query({
            query: ({ category, color, minPrice, maxPrice, page = 1, limit = 10 }) => {
                const queryParams = new URLSearchParams({
                    category: category || "",
                    color: color || "",
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || "",
                    page: page.toString(),
                    limit: limit.toString()
                }).toString();
                return `/?${queryParams}`;
            },
            providesTags: ["Products"]
        }),

        // GET SINGLE PRODUCT
        getSingleProduct: builder.query({
            query: () => ({
                url: "/:id",
                method: "GET"
            })
        }),

        // GET RELATED PRODUCTS

        getRelatedProducts: builder.query({
            query: () => ({
                url: '/related-products/:id',
                method: "GET"
            })
        }),

        // POST NEW PRODUCT

        newProduct: builder.mutation({
            query: () => ({
                url: '/new-product',
                method: "POST"
            })
        }),

        // DELETE A PRODUCT

        deleteProduct: builder.mutation({
            query: () => ({
                url: '/new-product',
                method: "DELETE"
            })
        }),

        // UPDATE A PRODUCT

        updatedProduct: builder.mutation({
            query: () => ({
                url: "/update-product/:id",
                method: "PATCH"
            })
        })
    })

})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetRelatedProductsQuery, useDeleteProductMutation, useUpdatedProductMutation, useNewProductMutation } = productApi;
export default productApi;