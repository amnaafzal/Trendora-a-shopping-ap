'use client'

import React, { useEffect, useState } from 'react'
import Trending_cards from './Trending_cards'
import productsData from '@/public/data/products.json'
import Shop_filters from './Shop_filters'
import { useGetAllProductsQuery } from '../features/products/productApi'

const Page = () => {

  const filters = {
    category: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "gold", "blue", "silver", "brown"],
    priceRange: [
      { label: "under $50", min: "0", max: "50" },
      { label: "$50-$100", min: "50", max: "100" },
      { label: "$100-$200", min: "100", max: "200" },
      { label: "$200-above", min: "200", max: Number.MAX_VALUE }

    ]
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8)
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: null
  })
  const { category, color, priceRange } = filterState;

  const minPrice = priceRange && typeof priceRange === "object" ? priceRange.min : "";
  const maxPrice = priceRange && typeof priceRange === "object" ? priceRange.max : "";



  const { data = {}, error, isLoading } = useGetAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minprice: minPrice,
    maxprice: maxPrice,
    page: currentPage,
    limit: productsPerPage
  })

  const { products = [], count, totalPages } = data || {};




  const clearFilter = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: ""
    })
  }

  if (isLoading) return <div>Loading .....</div>
  if (error) return <div>error occured: {error.message}</div>




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
            <Shop_filters filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilter={clearFilter} />
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
