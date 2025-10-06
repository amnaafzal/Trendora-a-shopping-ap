"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from './CartModal';
import { useLogoutUserMutation } from '../features/auth/authApi';
import { logout } from '../features/auth/authSlice';



const Navbar = () => {


  const products = useSelector((state) => state.cart.products)
  let cartValue = 0

  if (products.length != 0) {
    cartValue = products.length
  }


  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  
  // dropdown menus
  const [isdropdownOpen, setIsdropdownOpen] = useState(false)
  const [profileImageSrc, setProfileImageSrc] = useState('/imgaes/avatar.png');
  const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);
  
  useEffect(() => {
    if (user?.profileImage) {
      setProfileImageSrc(user.profileImage);
  }
}, [user]);

const toggleDropownMenu = () =>{
  setIsdropdownOpen((prev) => !prev)
}

// admin dropdown menu

const adminDropdownMenu = [
  {label : "Dashboard", path: "/dashboard/admin"},
  {label : "Manage Items", path : '/dashboard/manage-items'},
  {label : "All Orders", path : "/dashboard/all-orders"},
  {label : "Add New Post", path : "/dashboard/add-new-post"}
]

// user ropdown menu

const userDropDownMenu = [
  {label : "Dashboard", path: '/dashboard'},
  {label : "Profile", path: '/dashboard/profile'},
  {label : "Orders", path: '/dashboard/orders'},
  {label : "Payments", path: '/dashboard/payments'},

]

const dropdownMenu = user?.role === 'admin' ? [...adminDropdownMenu] : [...userDropDownMenu]

  const clickCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }

  const [logoutUser] = useLogoutUserMutation()


  // handle logout 
  const handleLogout = async() =>{
    await logoutUser().unwrap()
    dispatch(logout())
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

            {
              isClient && user ? (<div className='relative'>
                <img src={profileImageSrc}
                onClick={toggleDropownMenu}
                 alt="profile" 
                className='size-10 bg-white shadow-lg p-0.5 rounded-full cursor-pointer'
                 />


                {isdropdownOpen && <ul className='dropdown-menu absolute shadow-2xl mt-2 right-0 bg-white text-start p-4 z-50 w-42 rounded-lg space-y-2'>
                 {
                    dropdownMenu.map((item, index) => (
                      <li className='list-item space-y-4' key={index}>
                        <Link href={item.path} onClick={toggleDropownMenu}>{item.label}</Link>
                      </li>
                    ))
                 }
                 <li className='list-item' onClick={handleLogout}>Logout</li>
                 </ul>}

              </div>) : (<Link href={'/login'} className='cursor-pointer'>
                <Image src="/imgaes/contact.png" alt='profile' width={24} height={24}></Image>
              </Link>)
            }



          </div>
        </nav>
      </header>

      {isCartOpen && <CartModal products={products} cartOpen={isCartOpen} onClose={handleCartToggle} />}
    </>
  )
}

export default Navbar
