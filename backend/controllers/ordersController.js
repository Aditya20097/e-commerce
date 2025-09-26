import orderModal from "../models/orderModel.js"
import userModels from "../models/userModels.js"
import Stripe from 'stripe'

// global variables
 const currency ='inr'
 const deliveryCharges = 10

//gateway initializze 
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing order using cod method

const placeOrder = async(req,res)=>{

     try {
        const {userId, items, amount, address}=req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:'COD',
            payment:false,
            date : Date.now()
        }
        const newOrder = new orderModal(orderData)
        await newOrder.save()
        
        await userModels.findByIdAndUpdate(userId,{cartData :{}})
        res.json({success : true , message :'order placed'})



     } catch (error) {
        console.log(error);
        res.json({success:false , message :error.message})
        
     }
}


const placeOrderStripe = async(req,res)=>{
 try {

    const {userId, items, amount, address}=req.body
    const {origin} = req.headers

      const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:'Stripe',
            payment:false,
            date : Date.now()
        }

         const newOrder = new orderModal(orderData)
        await newOrder.save()
        
        const line_items = items.map((item)=>({
         price_data: {
            currency:currency,
            product_data: {
               name : item.name
            },
            unit_amount : item.price * 100 
         },
         quantity : item.quantity
        }))

        line_items.push({
          price_data: {
            currency:currency,
            product_data: {
               name : 'Delivery Charges'
            },
            unit_amount :deliveryCharges * 100 
         },
         quantity : 1
        })
      
        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode :'payment',
        })
        res.json({success:true, session_url:session.url})

 } catch (error) {
    console.log(error);
        res.json({success:false , message :error.message})
 }



}
// verify stripe payment details

const verifyStripe = async (req,res) => {
   const {orderId, success,userId} = req.body
   try {
      if (success== "true") {
         await orderModal.findByIdAndUpdate(orderId,{payment:true})
         await userModels.findByIdAndUpdate(userId,{cartData: {}})
         res.json({success:true})
      } else {
         await orderModal.findByIdAndDelete(orderId)
         res.json({success:false})
      }
   } catch (error) {
       console.log(error);
        res.json({success:false , message :error.message})
 
   }
}


// placing order using razorpay method
const placeOrderRazorpay = async(req,res)=>{
    
}

// displaying orders data for admin panel


const allOrders = async(req,res)=>{
    try {
      const orders = await orderModal.find({})
      res.json({success:true,orders})
    } catch (error) {
       console.log(error);
       res.json({success:false , message :error.message}) 
    }
}
 // user order data for frontend

const userOrders = async(req,res)=>{
   try {
      const {userId} = req.body
      const orders = await orderModal.find({userId})
      res.json({success:true, orders})

   } catch (error) {
      console.log(error);
       res.json({success:false , message :error.message}) 
   }
}

// update order status from admin panel 

const updateStatus = async(req,res)=>{
    try {

      const {orderId , status} = req.body
      await orderModal.findByIdAndUpdate(orderId,{status})
      res.json({success:true , message:"status updated"})
    } 
    catch (error) {
      console.log(error);
       res.json({success:false , message :error.message})
    }
}

export {  verifyStripe,placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}