import React from 'react'

const Promo_banner = () => {
    return (
      <div className='section mt-24' >
          <div className='promo_section'>
            <div className="promo_card">
                <span><i className="ri-truck-line text-red-700 text-2xl mb-2"></i></span>
                <h2 className='font-bold text-md mb-2'>Free Delivery</h2>
                <p>Provides the convinience and the ability to shop from anywhere, anytime</p>
                
            </div>
            <div className="promo_card">
                <span><i className="ri-money-dollar-circle-line text-red-700 text-2xl mb-2"></i></span>
                <h2 className='font-bold text-md mb-2'>100% Money Back Gauranty</h2>
                <p>E-commerce have the review system where customer can share feedback</p>
               
 
            </div>
            <div className="promo_card">
                <span><i className="ri-user-voice-line text-red-700 text-2xl mb-2"></i></span>
                <h2 className='font-bold text-md mb-2'>Strong Support</h2>
                <p>Offer customer support services to assist customers with queries and issues.</p>
                
            </div>
         
        </div>
      </div>
    )
}

export default Promo_banner
