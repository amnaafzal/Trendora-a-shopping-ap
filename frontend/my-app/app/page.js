import React from 'react'
import Banner from './components/Banner'
import Categories from './components/Categories'
import HeroSection from './components/HeroSection'
import Trending_section from './shop/Trending_section'
import Deals_section from './components/Deals_section'

const page = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection />
      <Trending_section />
      <Deals_section />
    </div>
  )
}

export default page
