import React, {useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
   const [latestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
          if (products.length > 0) {
      setLatestProducts(products.slice(0, 12));
              }
    },[products])


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest"} text2={"Collections"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover the latest trends and styles in our newest collections. Stay ahead of the fashion curve with our handpicked selection of the freshest arrivals.
        </p>
      </div>
    {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))

        }
      </div>
    </div>
  )
}

export default LatestCollection
