import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='banner section mt-14 w-[100%] relative mb-20'>
    <Image src="/imgaes/banner-1.jpg" alt='banner' width={1000} height={1000} className='w-[100%] md:w-[70%] rounded-2xl'></Image>
    <div className="banner_content absolute top-[20%] sm:top-[30%] left-[17%] w-[70%]">
        <h2 className='text-pink-400'>Summer sale 50% discount</h2>
        <h1 className='text-2xl sm:text-4xl font-bold'>Women's Fashion</h1>
        <p className='hidden md:block'>Be the first to shop our brand-new styles.</p>
        <button className='product_btn'><Link href='/shop'>Shop Now</Link></button>
    </div>
    
    </div>
  )
}

export default Banner
