import React from 'react'
import Banner from './components/Banner'
import Categories from './components/Categories'
import HeroSection from './components/HeroSection'
import Trending_section from './shop/Trending_section'
import Deals_section from './components/Deals_section'
import Promo_banner from './components/Promo_banner'
import Blogs from './blogs/Blogs'


const page = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection />
      <Trending_section />
      <Deals_section />
      <Promo_banner />
      <Blogs />
    </div>
  )
}

export default page
