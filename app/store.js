import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/CartSlice'
import authApi from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice"
import productApi from "./features/products/productApi";



export const store = configureStore({
  reducer: {
  cart : cartReducer,
  [authApi.reducerPath] : authApi.reducer,
  auth : authReducer,
  [productApi.reducerPath] : productApi.reducer
  },

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});
