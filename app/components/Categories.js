import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Categories = () => {


  let categories = [
    { id:1, catName: "Accessories", path: "accessories", image: "/imgaes/accessories.jpg" },
    { id:2, catName: "Dress Collection", path: "dress", image: "/imgaes/dressing.jpg" },
    { id:3, catName: "Jewelery", path: "jewellery", image: "/imgaes/jewelry.jpg" },
    { id:4, catName: "Cosmetics", path: "cosmetics", image: "/imgaes/cosmetics.jpg" },
  ]


  return (
    <>
      <div className="section flex-wrap md:flex-nowrap items-center gap-20 mt-24">
        {categories.map((category) => (
           <Link key={category.id} href={`category/${category.path}`} className='flex flex-col items-center gap-3'>
              <Image src={category.image} alt='categories images' height={100} width={100} className='w-25 h-25 rounded-full'></Image>
              <p>{category.catName}</p>
            </Link>)
            
          )
        }
  
      </div>
    </>
  )
}

export default Categories
