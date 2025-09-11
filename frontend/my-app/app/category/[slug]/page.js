'use client'
import React, { use, useState, useEffect } from 'react'
import products from '@/public/data/products.json'
import Trending_cards from '@/app/shop/Trending_cards'

const Page = ({ params }) => {
    const { slug } = use(params)
    const [filteredProduct, setFilteredProduct] = useState([])
  
    // filter the required products
    useEffect(() => {
        const filtered = products.filter(
            (product) => product.category === slug
        )
        setFilteredProduct(filtered)
    }, [slug])


    // scroll from top 

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className='section h-[100%]'>
            {/* header */}
            <header className='section_header'>
                <div className="header_content">
                    <h1 className='capitalize font-bold text-2xl mb-3.5'>{slug}</h1>
                    <p>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your stye today.</p>
                </div>

            </header>

            {filteredProduct.length === 0 ? (
                <p>No products found.</p>   //if there are no products matched
            ) : (
                <Trending_cards products={filteredProduct} />  //using the component
            )}
        </div>
    )
}

export default Page
