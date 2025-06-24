import React, { useContext, useState } from 'react'
import logo from '../assets/frontend_assets/logo.png'   // ← point at the actual file
import { Link, NavLink } from 'react-router-dom'
import search_icon from '../assets/frontend_assets/search_icon.png'
import profile_icon from '../assets/frontend_assets/profile_icon.png'
import cart_icon from '../assets/frontend_assets/cart_icon.png'
import menu_icon from '../assets/frontend_assets/menu_icon.png'
import dropdown_icon from '../assets/frontend_assets/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible, setVisible] = useState(false)
const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

const logout= () => {
  navigate('/login');
  localStorage.removeItem('token');
  setToken('');
  setCartItems({});
}




return(
  <div className="flex items-center justify-between py-5 font-medium">
    <Link to="/">
    <img src={logo} alt="logo" className="w-36" />
    </Link>

    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

      <NavLink className="flex flex-col items-center" to="/">
      <p>Home</p>
      <hr className="w-2/4 hidden bg-gray-700 h-[1.5px] border-none" />
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/collections">
      <p>Collections</p>
      <hr className="w-2/4 hidden bg-gray-700 h-[1.5px] border-none" />
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/about">
      <p>About</p>
      <hr className="w-2/4 hidden bg-gray-700 h-[1.5px] border-none" />
      </NavLink>
      <NavLink className="flex flex-col items-center" to="/contact">
      <p>Contact</p>
      <hr className="w-2/4 hidden bg-gray-700 h-[1.5px] border-none" />
      </NavLink>


    </ul>

    <div className='flex items-center gap-6'>
      <img onClick={()=>setShowSearch(true)} src={search_icon} className='w-5 cursor-pointer' alt='' />
      <div className='group relative'>
        
        <img onClick={()=> token ? null: navigate('/login')} src={profile_icon} className='w-5 cursor-pointer' alt='' />
        {/* Dropdown Menu */}
       { token &&
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-2 px-6 bg-slate-100 rounded text-gray-500'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>


          </div>
        </div>}

      </div>
      <Link to="/cart" className='relative'>
          <img src={cart_icon} className='w-5 min-w-5 cursor-pointer' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p> 
          
      </Link>
      <img onClick={()=>setVisible(true)} src={menu_icon} className='w-5 cursor-pointer sm:hidden' alt='' />

    </div>
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`} onClick={()=>setVisible(false)}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
           <img src={dropdown_icon} className='h-4 rotate-180' alt='' />
           <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/" >HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection" >COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about" >ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact" >CONTACT</NavLink>
    </div>
  </div>
  </div>
  
)
}

export default NavBar
