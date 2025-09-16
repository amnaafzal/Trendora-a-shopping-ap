import React from 'react'
import Image from 'next/image'

const Deals_section = () => {
    return (
        <div className='mt-10'>
            <section className="deals section relative w-full mt-24">
                <Image src='/imgaes/banner-3.jpg' alt='deals_image' height={1000} width={1100} className='rounded-2xl max-w-[90%] md:w-[70%]' ></Image>
                <div className="deals_description absolute top-[20%] left-[10%] md:left-[20%] w-[70%] md:w-[30%]">
                    <div className='deals_content'>
                        <p className='text-sm text-pink-500'>Get Up To 30% Discount</p>
                        <h1 className='text-md md:text-2xl font-bold'>Deal Of The Month</h1>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem cum nisi. Veritatis velit perspiciatis ullam, doloremque qui eaque tempora in</p>
                    </div>
                    <div className="deals_countdown justify-around gap-3 mt-2 lg:mt-10 w-[70%] flex">
                        <div className="countdown_card">
                            <h2>2</h2>
                            <p>Days</p>
                        </div>
                        <div className="countdown_card">
                            <h2>12</h2>
                            <p>Hrs</p>
                        </div>
                        <div className="countdown_card">
                            <h2>20</h2>
                            <p>Mins</p>
                        </div>
                        <div className="countdown_card">
                            <h2>25</h2>
                            <p>Sec</p>
                        </div>
                        
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Deals_section
