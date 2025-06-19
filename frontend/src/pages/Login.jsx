import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up'); // 'login' or 'register'
     
    const onSubmitHandler =async(e) => 
      {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    }
    return (

      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular justify-items-center text-2xl'>{currentState}</p>
          <hr className='w-8 h-[1.5px] border-none border-gray-800' />
        </div>
        {currentState=== 'Login' ? '' :<input type='text' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name'/>}
        <input type='email' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email'/>
        <input type='password' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password'/>
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
