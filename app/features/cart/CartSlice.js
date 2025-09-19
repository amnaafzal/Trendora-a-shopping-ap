import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    selecteditems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        AddTOCart: (state, action) => {

            const isExist = state.products.find(product => product.id == action.payload.id)

            if (!isExist) {
                state.products.push({ ...action.payload, quantity: 1 })
            } else {
                console.log("product already exist")
            }

            state.selecteditems = setSelectedproducts(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandotal(state)
        },

        clearCart: (state) => {

            state.products = [],
                state.selecteditems = 0,
                state.totalPrice = 0,
                state.tax = 0,
                state.taxRate = 0.05,
                state.grandTotal = 0


        },

        popItem: (state, action) => {
            state.products = state.products.filter((item) => (
                item.id != action.payload.id
            ))

            state.setSelectedproducts = setSelectedproducts(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandotal(state)
        },

        incrementQuantity: (state, action) => {
            const match = state.products.find(item => (
                item.id === action.payload.id
            ))

            match.quantity += 1;

            state.setSelectedproducts = setSelectedproducts(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandotal(state)
        },
        deccrementQuantity: (state, action) => {
            const match = state.products.find(item => (
                item.id === action.payload.id
            ))

            match.quantity -= 1;

            state.setSelectedproducts = setSelectedproducts(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandotal(state)
        }


    },
})




// utility functions

const setSelectedproducts = (state) => {
    return state.products.reduce((total, product) => {
        return total + product.quantity
    }, 0)
}
const setTotalPrice = (state) => {
    return state.products.reduce((total, product) => {
        return total + product.price * product.quantity
    }, 0)
}
const setTax = (state) => setTotalPrice(state) * state.taxRate
const setGrandotal = (state) => setTax(state) + setTotalPrice(state)



export const { AddTOCart, clearCart, popItem, incrementQuantity, deccrementQuantity } = cartSlice.actions

export default cartSlice.reducer
