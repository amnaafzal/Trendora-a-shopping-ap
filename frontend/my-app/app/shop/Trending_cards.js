import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Star_rating from '../components/Star_rating'

const Trending_cards = ({products}) => {
  
    
    return (
        // creating cards
        <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%]  my-12'>
            
      {
          products.map((product)=>(
            <div key={product.id} className='relative'>
            <Link href={`shop/${product.id}`} className="card flex flex-col justify-center items-center">
                <img src={product.image} className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300'></img>
                 {/* product description */}
                <div className="product_info flex flex-col items-center mt-4">
                    <h1 className="product_title font-bold">{product.name}</h1>
                    <p>{product.price} <span className='line-through text-gray-500 text-sm'>{product.oldPrice}</span></p>
                    <Star_rating rating={product.rating}/>
                </div>
            </Link>

            <button className='absolute top-[3%] right-[3%] p-1 cursor-pointer z-20 hover:bg-red-600 bg-red-500'><Image src='/imgaes/shopping-cart.png' width={25} height={25} alt='add to cart'></Image></button>
            </div>
          ))
      }

    </section>
  )
}

export default Trending_cards
