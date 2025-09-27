import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/auth/users`,
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
        loginUSer : builder.mutation({
            query : (credentials) =>({
                url: '/login',
                method: 'POST',
                body: credentials
            })
        })
    })


    

})


export const {useLoginUSerMutation, useRegisterUserMutation} = authApi;
export default authApi; 