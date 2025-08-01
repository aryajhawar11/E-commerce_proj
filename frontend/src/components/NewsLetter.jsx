import React from 'react'

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log('Form submitted');
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-shadow-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 text-sm md:text-base'>Subscribe to our newsletter and get the latest updates</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' />
            <button type='submit' className=' bg-black text-white px-4 py-2 sm:py-3 sm:px-6 text-sm sm:text-base font-semibold'>Subscribe</button>
        </form>
    
    </div>
  )
}

export default NewsLetter 
