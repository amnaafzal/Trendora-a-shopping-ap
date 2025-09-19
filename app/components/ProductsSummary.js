import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/CartSlice'

const ProductsSummary = () => {


    const dispatch = useDispatch()


    const grandTotal = useSelector((state) => state.cart.grandTotal).toFixed(2)
    const selectedItems = useSelector((state) => state.cart.selecteditems).toFixed(2)
    const totalPrice = useSelector((state) => state.cart.totalPrice).toFixed(2)
    const tax = useSelector((state) => state.cart.tax).toFixed(2)



    const handleclearCart = () =>{
        
        dispatch(clearCart())
        
    }

    const ProceedCart = () =>{

    }



  return (
    <div className='mt-10 bg-orange-200 p-3 flex flex-col items-start gap-2.5'>
      <h1 className='text-xl font-semibold'>Order Summary</h1>

      <p ><span className='font-semibold ml-1'>Selected Items: </span>${selectedItems}</p>
      <p ><span className='font-semibold ml-1'>Total Price: </span>${totalPrice}</p>
      <p ><span className='font-semibold ml-1'>Tax(5%): </span>${tax}</p>
      <p><span className='font-semibold ml-1'>Grand Total: </span>${grandTotal}</p>
   

      <button onClick={handleclearCart} className='bg-red-700 text-white px-4 py-1 cursor-pointer'>Clear Cart</button>
      <button onClick={ProceedCart} className='bg-green-600 text-white px-4 py-1 cursor-pointer'>Proceed Checkout</button>
      


    </div>
  )
}

export default ProductsSummary
