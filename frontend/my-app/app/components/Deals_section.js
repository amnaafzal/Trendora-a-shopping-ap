import React from 'react'
import Image from 'next/image'

const Deals_section = () => {
  return (
    <div className='mt-10'>
      <section className="deals section relative w-full ">
        <Image src='/imgaes/banner-3.jpg' alt='deals_image' height={1000} width={1100} className='rounded-2xl max-w-[90%] w-[70%]' ></Image>
        <div className="deals_content absolute top-[20%] sm:top-[30%] md:top-[20%] left-[20%] w-[40%] md:w-[30%]">
           <p className='text-sm text-pink-500'>Get Up To 30% Discount</p>
           <h1 className='text-xl sm:text-2xl font-bold'>Deal Of The Month</h1>
           <p className='hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem cum nisi. Veritatis velit perspiciatis ullam, doloremque qui eaque tempora in</p>
        </div>
      </section>
    </div>
  )
}

export default Deals_section
