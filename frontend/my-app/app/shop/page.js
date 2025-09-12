'use client'

import React, { useState } from 'react'
import Trending_cards from './Trending_cards'
import productsData from '@/public/data/products.json'

const Page = () => {

  const filters = {
    category : ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "gold", "blue", "silver", "beige" ],
    priceRange: [
      { label : "under $50", min:"0" ,max: "50" },
      { label : "$50 to $100", min:"50" ,max: "100" },
      { label : "$100 to $200", min:"100" ,max: "200" },
      { label : "$200 and above", min:"200" ,max: "infinity" }
      
    ]
  }
  const [filteredData, setFilteredData] = useState(productsData)
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange : ""
  })



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

      <div className="section">
        {/* left side (filters) */}

        <div className='flex mb-14 justify-center gap-12 w-[100%] md:w-[70%]'>
          <div className="filter_section">
            filters
          </div>
          {/* right side (products) */}

          {/* <div className=""> */}
            <Trending_cards products={productsData}  />
          {/* </div> */}
        </div>
      </div>


    </>
  )
}

export default Page
