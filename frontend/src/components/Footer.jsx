import React from 'react'
import logo from '../assets/frontend_assets/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm: grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={logo} alt='' className='w-32 mb-5'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            <div>
                <p>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>082397837</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

        </div>
        <div >
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@forever.com-All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
