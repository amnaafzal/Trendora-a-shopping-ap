import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='section my-20'>
      <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[70%]'>
        <div className="footer_col p-3">
          <h4 className='font-bold text-lg'>Contact Info</h4>
          <p>
            <span><i className='ri-map-pin-line text-red-600'></i></span>
            123, London Bridge Street, London
          </p>

          <p>
            <span><i className='ri-mail-line text-red-600'></i></span>
            example@gmail.com
          </p>

          <p>
            <span><i className='ri-phone-line text-red-600'></i></span>
            (+92) 0111 111 1111
          </p>

        </div>



        <div className="footer_col p-3">
          <h4 className='font-bold text-lg'>Company</h4>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/">Work With us</a>
          <a href="/blogs">Our Blogs</a>
          <a href="/">Terms & Conditions</a>

        </div>



        <div className="footer_col p-3">
          <h4 className='font-bold text-lg'>Useful Links</h4>
          <a href="/">Help</a>
          <a href="/blogs">Track Your Order</a>
          <a href="/shop">Women</a>
          <a href="/">Men</a>
          <a href="/">Dresses</a>

        </div>


        <div className="footer_col">
          <h4 className='font-bold text-lg'>INSTAGRAM</h4>

          <div className="insta_grid grid grid-cols-3 gap-1">
            <img src="/imgaes/blog-1 - Copy.jpg" alt="" className='grid_img'/>
            <img src="/imgaes/blog-2.jpg" alt="" className='grid_img'/>
            <img src="/imgaes/blog-3.jpg" alt="" className='grid_img'/>
            <img src="/imgaes/blog-4.jpg" alt="" className='grid_img'/>
            <img src="/imgaes/accessories.jpg" alt="" className='grid_img'/>
            <img src="/imgaes/newsletter.png" alt="" className='grid_img'/>
          </div>
         

        </div>


      </footer>
    </div>
        <div className="footer_bar mb-3.5">
          Copyrigt @ reserved 2025. All right reserved.
        </div>
    </>
  )
}

export default Footer
