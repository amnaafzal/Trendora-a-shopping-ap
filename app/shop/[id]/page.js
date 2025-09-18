'use client'

import React, { use, useEffect } from 'react'
import productsData from '@/public/data/products.json'
import Star_rating from '@/app/components/Star_rating'
import { useDispatch } from 'react-redux'
import { AddTOCart } from '@/app/features/cart/CartSlice'


const page = ({ params }) => {


    const { id } = use(params)
    const filter = productsData.find(product => product.id === Number(id))


    const dispatch = useDispatch()

    const handleAddToCart = (filter) => {
        dispatch(AddTOCart(filter))
    }


    return (
        <>

            <div className='section'>
                <section className='section_header'>
                    <div className="header_content">
                        <h1 className='capitalize font-bold text-2xl mb-3.5'>Shop Products</h1>
                        <p>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your stye today.</p>
                    </div>

                </section>
            </div>

            {/* product section */}

            <section className="section mt-10">

                <div className='w-[70%] flex flex-col md:flex-row gap-10'>
                    {/* product image */}
                    <div className="product_img">
                        <img src={filter.image} alt={filter.name} />
                    </div>

                    {/* product info */}

                    <div className="product_info">
                        <h1 className='text-2xl font-medium'>{filter.name}</h1>
                        <p className='text-red-700 text-lg'>${filter.price} <span className='line-through text-sm text-gray-500'>{filter.oldPrice}</span></p>
                        <p className='text-gray-600'>{filter.description}</p>
                        <p className='capitalize'><span className='font-bold text-md mr-1.5'>Category: </span>{filter.category}</p>
                        <p className='capitalize'><span className='font-bold text-md mr-1.5'>Color: </span>{filter.color}</p>

                        <div className='font-bold text-md flex gap-3 align-middle'>Rating: <span>< Star_rating rating={filter.rating} /></span></div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleAddToCart(filter)
                            }}
                            className='bg-red-700 text-white px-4 py-1 cursor-pointer'>Add To Cart</button>
                    </div>
                </div>
            </section>

            {/* review section */}
            {/* review section will be designed when have a backend  */}


        </>
    )
}

export default page
