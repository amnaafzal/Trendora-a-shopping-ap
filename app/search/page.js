'use client'

import React, { useState, useEffect } from 'react'
import productData from '@/public/data/products.json'
import Trending_cards from '../shop/Trending_cards'


const page = () => {

  const [filteredProduct, setFilteredProduct] = useState(productData)
  const [query, setQuery] = useState('')


  const handleSubmit = () =>{
    const filter = productData.filter(product => product.category.toLowerCase().includes(query) ||  product.description.toLowerCase().includes(query) || product.name.toLowerCase().includes(query))
    setFilteredProduct(filter)
    setQuery('')
  }

  return (
    <>
      <div className='section'>
        <section className='section_header'>
          <div className="header_content">
            <h1 className='capitalize font-bold text-2xl mb-3.5'>Search Products</h1>
            <p>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your stye today.</p>
          </div>

        </section>
      </div>

      <section className="section mb-20">
        <div className="search_section">
          <input type="text"
            placeholder='Search Product....'
            value={query}
            className='searchbar'
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search_submit_btn bg-red-600 py-2 px-7 font-bold cursor-pointer" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </section>


      <section className="section w-[100%]">
        <div className='w-[90%] md:w-[70%] flex justify-center items-center'>
        <Trending_cards products={filteredProduct} />
        </div>
      </section>


    </>
  )
}

export default page
