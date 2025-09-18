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

        AddTOCart : (state, action) =>{

            const isExist = state.products.find(product=> product.id == action.payload.id)

            if(!isExist){
                state.products.push({...action.payload, quantity : 1})
            }else{
                console.log("product already exist")
            }

            state.selecteditems = setSelectedproducts(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandotal(state)
        } 

    },
})



// utility functions

const setSelectedproducts = (state) => {
    state.products.reduce((total, product) =>{
        return Number(total+product.quantity)
    } )
}
const setTotalPrice = (state) => {
 state.products.reduce((total, product) =>{
        return Number(total+product.price*product.quantity)
    } )
}
const setTax = (state) => setTotalPrice(state)* state.taxRate
const setGrandotal = (state) => setTax(state) + setTotalPrice



export const { AddTOCart } = cartSlice.actions

export default cartSlice.reducer
