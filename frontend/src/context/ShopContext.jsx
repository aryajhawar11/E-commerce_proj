import React, { useMemo,createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const backendUrl= import.meta.env.VITE_BACKEND_URL
    const [search, setSearch]= useState("");
    const [showSearch, setShowSearch]= useState(false);
    const [cartItems,setCartItems]= useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    const navigate = useNavigate();


    const addToCart=async (itemId,size)=>{
        let cartData= structuredClone(cartItems)

        if(!size){
            toast.error('Select Product Size');
            return ;

        }

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }

        setCartItems(cartData);
        if(token){
            try {
                await axios.post(backendUrl + '/api/cart/add', {itemId,size}, { headers: { Authorization: `Bearer ${token}` }})
                toast.success("successfully added to cart")

            } catch (error) {
                console.log(error);
                toast.error(error.message);

                
            }
        }
    }



   const getCartCount= ()=>{
    let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount+= cartItems[items][item]
                    }
                } catch (error) {
                  console.log("error")  
                }
            }
        }
        return totalCount;
   }

   const updateQuantity= async (itemId,size,quantity)=>{

    let cartData= structuredClone(cartItems);
    cartData[itemId][size]= quantity;
     setCartItems(cartData);

     if(token){
        try {
            await axios.post(backendUrl + '/api/cart/update',{itemId, size, quantity},{headers:{Authorization: `Bearer ${token}`}})
        } catch (error) {
             console.log(error);
            toast.error(error.message);
        }
     }
   }

   const getCartAmount = ()=>{

    let totalAmount =0;

    for(const items in cartItems){
        
        for(const items in cartItems){
            let itemInfo= products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount+= itemInfo.price * cartItems[items][item];
                    }
                }
                catch(error){
                // console.log(error);
                //  toast.error(error.message);
                }
            }
        }
    }
    return totalAmount
   }
   
   const getProductsData = async () => {
        try {  
            const response= await axios.get(`${backendUrl}/api/product/list`);
            if(response.data.success){
                setProducts(response.data.products);
            }
            else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            console.log(error);
        }
    }


    const getUserCart= async (token)=>{
        try {
            const response= await axios.post(backendUrl + '/api/cart/get',{},{headers:{Authorization: `Bearer ${token}`}})
            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        } catch (error) {

             console.log(error);
                toast.error(error.message);
            
        }
    }


        useEffect(() => {
            getProductsData();
        }, [products]);

    useEffect(() => {
      if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
        getUserCart(localStorage.getItem('token') );
      }
   
    }, []);



    const value = useMemo(() => ({ products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, setCartItems ,addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, token, setToken }),
     [products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, token, setToken, setCartItems]);
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


// ShopContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
//   };_