import React from 'react'
import blogsData from '@/public/data/blogs.json'



const Blogs = () => {
    
  return (
    <div className='section mt-24'>
      <div className='latest_section rounded-xl'>
        <div className="latest_section_header flex flex-col justify-center items-center align-middle text-center w-[60%] mb-10">
          <h1 className='text-2xl font-bold mb-2.5'>Latest From Blog</h1>
          <p>Elevate your wardrobe with our freshest style tips, trends and inspiration from our blog.</p>
        </div>

        <div className='latest_blogs w-[90%] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            blogsData.map((blog)=>(
                <div key={blog.id} className="blogs_card hover:scale-105 duration-300 transition-all cursor-pointer bg-white rounded-xl">
                    <img  alt='latest blog image' src={blog.imageUrl} className='rounded-t-xl'></img>
                    <div className="blog_card_content flex flex-col justify-center items-center text-center p-2 mb-3">
                        <h6 className='text-sm text-pink-500'>{blog.subtitle}</h6>
                        <h4 className='text-md font-bold'>{blog.title}</h4>
                        <p className='text-sm text-gray-500'>{blog.date}</p>
                    </div>
                </div>
            ))
          }
        </div>

      </div> 
    </div>
  )
}

export default Blogs
