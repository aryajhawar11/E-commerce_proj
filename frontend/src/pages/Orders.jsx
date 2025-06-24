import React, { useContext,useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';


const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData]= useState([]);

    const loadOrderData = async ()=>{
      try {
        if(!token){
          return null
        }

        const response= await axios.post(backendUrl + '/api/order/userorders',{},{headers:{Authorization: `Bearer ${token}`}})
        if(response.data.success){
          let allOrdersItem= []
          response.data.orders.map((order)=>{
            order.items.map((item)=>{
              item['status']= order.status
              item['payment']= order.payment
              item['paymentMethod']= order.paymentMethod
              item['date']= order.date
              allOrdersItem.push(item)
            })
          })
          setOrderData(allOrdersItem.reverse())
        }

      } catch (error) {
        
      }
    }

    useEffect(()=>{
      loadOrderData()
    },[token])



  return (
    <div className='border-t pt-10'>
      <div className='text-2xl mb-4'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div key={index} className='py-3 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm'>

            {/* Image and Product Info */}
            <div className='flex gap-3 w-full md:w-1/2'>
              <img className='w-14 sm:w-16' src={item.image[0]} alt='' />
              <div className='flex flex-col gap-1'>
                <p className='font-medium text-sm sm:text-base'>{item.name}</p>
                <div className='flex flex-wrap gap-x-4 gap-y-1 text-gray-600 text-sm'>
                  <p>Price: <span className='text-black'>{currency}{item.price}</span></p>
                  <p>Qty: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                  <p>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>
            </div>

            {/* Order Status and Button */}
            <div className='md:w-1/2 flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>
              <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
