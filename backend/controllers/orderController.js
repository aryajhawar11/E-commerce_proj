import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

//Placing order using COD method
const placeOrder= async (req,res)=>{

    try {
        const {userId, items, amount, address}= req.body;

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder= new orderModel(orderData)
        await newOrder.save() ;

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
    
}
//Placing orders using Stripe
const placeOrderStripe= async (req,res)=>{

} 

//Placing orders using razorpay method
const placeOrderRazorpay= async (req,res)=>{

}

//Allorders data for admin panel
const allOrders = async(req,res)=>{

    try {
        const orders= await orderModel.find({})
            res.status(200).json({success:true, orders})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }

}

//User Order data for frontend
const userOrders = async(req,res)=>{
try {
    
    const {userId}=req.body
    const orders= await orderModel.find({userId})
    res.status(200).json({success:true,orders})
} catch (error) {

    console.log(error)
        res.status(500).json({success:false, message:error.message})
    
}

}


//update order status from admin panel
const updateStatus = async (req,res)=>{
    try {
        
        const {orderId,status}= req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.status(200).json({success:true, message:'Status Updated'})
    } catch (error) {
         console.log(error)
        res.status(500).json({success:false, message:error.message})
    }


}

export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus};