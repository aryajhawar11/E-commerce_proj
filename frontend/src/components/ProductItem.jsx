import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer' >
        <div className='overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out' />
           
        </div>
            <p className='text-lg font-semibold'>{name}</p>
            <p className='text-sm font-medium text-gray-500'>{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem
