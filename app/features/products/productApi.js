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
            query: ({ category, color, minprice, maxprice, page = 1, limit = 10 }) => {
                const queryParams = new URLSearchParams({
                    category: category || "",
                    color: color || "",
                    minprice: minprice || 0,
                    maxprice: maxprice || "",
                    page: page.toString(),
                    limit: limit.toString()
                }).toString();
                return `/?${queryParams}`;
            },
            providesTags: ["products"]
        }),

        // GET SINGLE PRODUCT
        getSingleProduct: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: "products", id}] 
        }),

        // GET RELATED PRODUCTS

        getRelatedProducts: builder.query({
            query: (id) => `/related-products/${id}`,
             providesTags : ["products"]              
        }),

        // POST NEW PRODUCT

        postNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/new-product',
                method: "POST",
                body: newProduct,
                credentials: "include"
            }),
            invalidatesTags: ["products"]
        }),

        // DELETE A PRODUCT

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
                credentials : "include"
            }),
            invalidatesTags : (result, error, id) =>[{type: "products", id}]
        }),

        // UPDATE A PRODUCT

        updatedProduct: builder.mutation({
            query: (id, ...rest) => ({
                url: `/update-product/${id}`,
                method: "PATCH",
                body: rest,
                credentials : "include"
            }),
            invalidatesTags : (result, error, id) =>[{type: "products", id}]
        })
    })

})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetRelatedProductsQuery, useDeleteProductMutation, useUpdatedProductMutation, useNewProductMutation } = productApi;
export default productApi;