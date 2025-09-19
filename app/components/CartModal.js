import React from 'react'
import ProductsSummary from './ProductsSummary'
import { popItem } from '../features/cart/CartSlice'
import { useDispatch } from 'react-redux'


const CartModal = ({ products, cartOpen, onClose }) => {



    const dispatch = useDispatch()

    const DecementQuantity = () =>{
        console.log("decremented")
    }

    const incrementQuantity = () =>{
        console.log("incremented")
    }

    const removeItem = (item) =>{

        dispatch(popItem(item))
    }




    return (
        <div className={`fixed z-[1000] inset-0 bg-black/80  transition-colors  ${cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            style={{ transition: 'background-color 300ms' }}>

            <div className={`fixed top-0 right-0 md:w-1/3 w-full bg-white backdrop-opacity-0 h-full overflow-y-auto transition-transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45 0.96)' }}
            >
                <div className='px-3 mt-5'>
                    {/* title */}
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-semibold'>Your Cart</h1>
                        <button className='bg-black hover:bg-gray-900 p-1 cursor-pointer'
                            onClick={() => onClose()}
                        ><i className="ri-xrp-fill text-gray-200 "></i></button>
                    </div>

                    {/* cart details */}

                    <div className='mt-4 flex flex-col gap-4'>
                        {products.length === 0 ? <div>No Items</div> : (
                            products.map((item, index) => (
                                <div key={index} className='flex justify-between items-center shadow-md p-2.5'>

                                    {/* item info */}
                                    <div className='flex justify-center items-center gap-3'>
                                        <span className='bg-red-800 rounded-full px-1 text-white text-sm'>{index + 1}</span>
                                        {/* item image */}
                                        <img src={item.image} alt={item.name} className='size-12 object-cover' />
                                        {/* item desc */}
                                        <div>
                                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                                            <p className='text-gray-600 text-sm'>{`$${item.price}`}</p>
                                        </div>

                                    </div>

                                    {/* change item quantity */}
                                    <div className='flex flex-row md:justify-start justify-end items-center'>
                                        <span className='bg-gray-400 hover:bg-red-600 text-black hover:text-white cursor-pointer size-6 flex justify-center items-center px-1 rounded-full mr-2' onClick={DecementQuantity}>-</span>
                                        <span>{item.quantity}</span>
                                        <span className='bg-gray-400 hover:bg-red-600 text-black hover:text-white  cursor-pointer size-6 flex justify-center items-center px-1 rounded-full ml-2' onClick={incrementQuantity}>+</span>
                                    </div>

                                    {/* remove item */}
                                    <button onClick={()=>removeItem(item)} className='bg-red-700 text-white px-4 py-1 cursor-pointer hover:bg-red-600'>Remove</button>
                                </div>

                            ))
                        )}
                    </div>

                    {/* calculations */}

                    {products.length > 0 && (<ProductsSummary />)}

                    <div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default CartModal
