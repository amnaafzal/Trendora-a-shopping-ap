'use client'

import React, { useEffect, useState } from 'react'
import Trending_cards from './Trending_cards'
import productsData from '@/public/data/products.json'
import Shop_filters from './Shop_filters'

const Page = () => {

  const filters = {
    category: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "gold", "blue", "silver", "brown"],
    priceRange: [
      { label: "under $50", min: "0", max: "50" },
      { label: "$50-$100", min: "50", max: "100" },
      { label: "$100-$200", min: "100", max: "200" },
      { label: "$200-above", min: "200", max: "infinity" }

    ]
  }
  const [products, setProducts] = useState(productsData)
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: null
  })


  // filtering products

  const applyFilter = () => {

    let filteredProducts = productsData;

    // filtering by color

    if (filterState.color && filterState.color !== "all") {
      filteredProducts = filteredProducts.filter(product => product.color === filterState.color)
    }

    // filtering by category

    if (filterState.category && filterState.category !== "all") {
      filteredProducts = filteredProducts.filter(product => product.category === filterState.category)
    }


    // filtering by price range 

    if (filterState.priceRange) {
      const { min, max } = filterState.priceRange
      filteredProducts = filteredProducts.filter(product => {
        const price = Number(product.price)
        return (
          price >= Number(min) &&
          (max === "infinity" ? true : price <= Number(max))
        )

      }
      )
    }

    setProducts(filteredProducts)

  }


  useEffect(() => {
    applyFilter()

  }, [filterState])


  const clearFilter = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: ""
    })
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

      <div className="section">
        {/* left side (filters) */}

        <div className='flex flex-col md:flex-row mb-14 justify-center  md:px-0 gap-12 w-[90%] md:w-[70%]'>
          <div className="filter_section">
            <Shop_filters filters={filters} filterState = {filterState} setFilterState ={setFilterState} clearFilter={clearFilter} />
          </div>
          {/* right side (products) */}

          <div className="product_section"> 
            <h1 className='font-medium text-xl'>{`${products.length} available from ${productsData.length}`}</h1>
          <Trending_cards products={products} />
          </div>
        </div>
      </div>


    </>
  )
}

export default Page
