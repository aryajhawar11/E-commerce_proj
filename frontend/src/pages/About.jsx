import React from 'react'
import Title from '../components/Title'
import about_img from '../assets/frontend_assets/about_img.png'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

        <p>Forever is more than just a fashion destination — it’s a lifestyle. We’re on a mission to bring timeless style, premium quality, and effortless confidence to every wardrobe. Whether you're dressing up for a night out or curating your everyday essentials, we offer a curated collection of apparel that blends comfort with contemporary design.</p>
        <p>We value authenticity, sustainability, and community. With secure payments, fast shipping, and dedicated customer service, your shopping experience is designed to be as seamless as your style.<br/>

          Join us and redefine your fashion journey — one look at a time.</p>

          <b className='text-shadow-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to empower individuals through accessible fashion that inspires confidence and self-expression. We strive to deliver high-quality, stylish, and affordable clothing for every body, every day — while committing to sustainable practices, customer satisfaction, and timeless design.</p>
        </div>
      </div>
      <div className='text-xl py-4'>

      </div>
      <NewsLetter />
    </div>
  )
}

export default About
