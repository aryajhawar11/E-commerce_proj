import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[15vw] 2xl:px-[20vw]">
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        {/* <Route path='/order/:orderId' element={<Orders />} /> */}
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />

      </Routes>
      <Footer/>
       </div>
  )
}

export default App

