"use client"

import React, {useState} from 'react'
import Trending_cards from './Trending_cards'
import products from "../../public/data/products"


const Trending_section = () => {

    const [visibleProducts, setVisibleProducts] = useState(8)
    console.log(products.length)

    const showMoreProducts =()=>{
        setVisibleProducts(prevProducts => prevProducts +4)
    }
   

  return (
    <div className="flex flex-col justify-center items-center mb-12 text-center w-[100%] ">
      <h1 className='text-2xl font-bold mb-2.5'>Trending Products</h1>
      <p className='text-gray-600'>Discover the season's hottest picks that fashion enthusiasts are adding to their carts daily</p>
      <p className='text-gray-600'>handpicked styles that are flying off our shelves</p>

    {/* trending cards */}
      <div className='w-[90%] md:w-[70%]'>
      <Trending_cards products= {products.slice( 0 , visibleProducts )} />
      </div>
      <div className='showproducts_btn mt-7'>{
        visibleProducts < products.length && (
        <button className='product_btn bg-red-500 hover:bg-red-600' onClick={showMoreProducts}>Show More</button> 
        )
        }
      </div>
    </div>
  )
}

export default Trending_section
