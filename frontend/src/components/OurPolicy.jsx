import React from 'react'
import exchange_icon from '../assets/frontend_assets/exchange_icon.png'
import quality_icon from '../assets/frontend_assets/quality_icon.png'
import support_img from '../assets/frontend_assets/support_img.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
        <div>
        <img src={exchange_icon} alt='' className='w-12 m-auto mb-5'/>
        <p className='text-gray-900 font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
        <img src={quality_icon} alt='' className='w-12 m-auto mb-5'/>
        <p className='text-gray-900 font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
        <img src={support_img} alt='' className='w-12 m-auto mb-5'/>
        <p className='text-gray-900 font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 Customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy
