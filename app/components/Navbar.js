"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CartModal from './CartModal'


const Navbar = () => {


  const products = useSelector((state) => state.cart.products)
  let cartValue = 0

  if (products.length != 0) {
    cartValue = products.length
  }


  const [isCartOpen, setIsCartOpen] = useState(false)

  const clickCart = ()=>{
    setIsCartOpen(!isCartOpen)
  }

  const handleCartToggle = () =>{
     setIsCartOpen(!isCartOpen)
  }

  return (
    <>

    <header className='flex  h-20 items-center justify-center align-middle '>

      <nav className=' flex justify-between items-center lg:w-[70%] w-[90%]'>
        <ul className='hidden gap-4 md:flex '>
          <li className='hover:text-pink-400'><Link href={"/"}>Home</Link></li>
          <li className='hover:text-pink-400'><Link href={"/shop"}>Shop</Link></li>
          <li className='hover:text-pink-400'><Link href={"/pages"}>Pages</Link></li>
          <li className='hover:text-pink-400'><Link href={"/contact"}>Contact</Link></li>
        </ul>

        <div className="logo text-2xl font-bold">
          <Link href='/'>Trendora<span className='text-pink-400'>.</span></Link>
        </div>

        <div className="icons flex gap-4 sm:gap-7 justify-center items-center">

          <span>
            <Link href='/search'><Image src="/imgaes/magnifying-glass.png" alt='search' width={24} height={24}></Image></Link>
          </span>
          <span onClick={clickCart} className='relative p-2.5 cursor-pointer'>
            <Image src="/imgaes/shopping-cart.png" alt='cart' width={24} height={24} className='m-0.5'></Image>
            <span className='absolute text-xs bg-red-600 rounded-2xl top-0 right-0 px-1'>{cartValue}</span>
          </span>
          <span className='cursor-pointer'>
            <Image src="/imgaes/contact.png" alt='profile' width={24} height={24}></Image>
          </span>


        </div>
      </nav>
    </header>

    {isCartOpen && <CartModal products ={products} cartOpen={isCartOpen} onClose={handleCartToggle}/>}
</>
  )
}

export default Navbar
