import React from 'react'
import Image from 'next/image'

const HeroSection = () => {


    const cards = [
        {
            id: 1,
            image: "/imgaes/card-1.png",
            trend: "2025 Trend",
            title: "Women's Shirt",
        },
        {
            id: 2,
            image: "/imgaes/card-2.png",
            trend: "2025 Trend",
            title: "Women's Dresses",
        },
        {
            id: 3,
            image: "/imgaes/card-3.png",
            trend: "2025 Trend",
            title: "Women's casuals",
        }
    ]


    return (
        <>
            <section className='mt-24 my-24 section gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                
                    {cards.map((card)=>
                    (<div className="card relative shadow-lg" key={card.id}>
                        <Image src={card.image} alt='card images' width={350} height={350} className='rounded-lg'></Image>
                        <div className="content absolute top-[30%] left-[45%]">
                            <p className='text-pink-700'>{card.trend}</p>
                            <h4 className='font-bold text-lg mb-1'>{card.title}</h4>
                            <a className='underline' href="/">Discover More</a>
                        </div>
                    </div>

                    ))}
               
            </section>
        </>
    )
}

export default HeroSection
