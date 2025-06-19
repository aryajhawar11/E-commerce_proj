import React from 'react'
import Title from '../components/Title'
import contact_img from '../assets/frontend_assets/contact_img.png'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='flex flex-col items-center justify-center my-10 md:flex-row gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px]' src={contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Address: 123 Main St, Anytown, USA</p>
          <p className='text-gray-500'>Phone: (123) 456-7890</p>
          <p className='text-gray-500'>Email: info@ourstore.com</p>
          <p className='text-gray-500 font-semibold'>Learn more about our teams  and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
      <NewsLetter />
      
    </div>
  )
}

export default Contact
