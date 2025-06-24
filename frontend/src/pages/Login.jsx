import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [currentState, setCurrentState] = useState('Login'); // 'login' or 'register'
    const {token,setToken, navigate, backendUrl} = useContext(ShopContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const onSubmitHandler =async(e) => 
      {
        e.preventDefault();
        try {
          if (currentState === 'Sign Up') {
            // Sign Up logic
            const response = await axios.post(backendUrl + '/api/user/register', {
              name,
              email,
              password
            });
            if (response.data.success) {
              setToken(response.data.token);
              localStorage.setItem('token', response.data.token);
              toast.success('Registration successful!');
            } else {
              toast.error(response.data.message);
            }
          } else {
            // Login logic
            const response = await axios.post(backendUrl + '/api/user/login', {
              email,
              password
            });
            if (response.data.success) {
              setToken(response.data.token);
              localStorage.setItem('token', response.data.token);
              toast.success('Login successful!');
            } else {
              toast.error(response.response.data.message);
            }
          }
        } catch (error) {
          
          if (error.response && error.response.data) {
            toast.error(error.response.data.message);
          } else {
            toast.error('An error occurred. Please try again.');
          }
        }
      }

      useEffect(() => {
        if (token) {
          navigate('/');
        }
      }, [token]);



    return (

      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular justify-items-center text-2xl'>{currentState}</p>
          <hr className='w-8 h-[1.5px] border-none border-gray-800' />
        </div>
        {currentState=== 'Login' ? '' :<input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name'/>}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email'/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password'/>
        <div className='flex justify-between w-full text-sm mt-[-8px]'>
          <p className='cursor-pointer text-gray-600'>Forgot Password?</p>
          <p className='text-gray-600 cursor-pointer' onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}>
            {currentState === 'Login' ? 'Create an Account' : 'Already have an Account?'}
          </p>
        </div>
        <button className='w-full px-4 py-2 mt-4 text-white bg-black rounded hover:bg-gray-700'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

      </form>

      


    
  )
}

export default Login
