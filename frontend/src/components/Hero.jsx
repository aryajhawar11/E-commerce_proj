import React from 'react';
import heroImg from '../assets/frontend_assets/hero_img.png';

const Hero = () => {
  return (
    <div className='h-85 sm:h-70 md:h-80 flex flex-col sm:flex-row border border-gray-400 rounded-lg shadow-lg overflow-hidden'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        src="https://st2.depositphotos.com/3662305/8022/i/450/depositphotos_80229428-Portrait-of-a-fashionable-model-with-natural-make-up-and-perfect-skin-dressed-in-mens-jeans-grey-shirt-black-jacket-and-sneakers-Studio-shot-High-fashion-look-Monochrome-black-and-white-photo.jpg"
        className='w-full sm:w-1/2 h-full object-cover object-top'
        alt='hero'
      />
    </div>
  );
};

export default Hero;
