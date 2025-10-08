import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
     reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/auth`,
        credentials: 'include'
    }),

    endpoints: (builder) =>({
        registerUser : builder.mutation({
            query: (newUser) =>({
                url: '/register',
                method: 'POST',
                body: newUser
            })
        }),
        loginUser : builder.mutation({
            query : (credentials) =>({
                url: '/login',
                method: 'POST',
                body: credentials
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: '/logout',
                method: "POST"
            })
        }),

        getUser: builder.query({
            query: () => ({
                url: '/users',
                method: "GET"
            }),
            invalidatesTags: ["users"],
            refetchedOnMount: true
        }),

        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["users"]
        }),

        updateRole: builder.mutation({
            query : ({userId, role}) => ({
                url: `/user/${userId}`,
                method: 'PUT',
                body: {role}
            }),
            refetchedOnMount : true,
            invalidatesTags: ['users']
        }),

        updateProfile : builder.mutation({
            query: (user) => ({
                url: '/edit-profile',
                method: "PATCH",
                body: user
            })
        }),


    })


    

})


export const {useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useDeleteUserMutation, useUpdateProfileMutation, useUpdateRoleMutation, useGetUserQuery} = authApi;
export default authApi; 