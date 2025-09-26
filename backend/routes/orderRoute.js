import express from'express'
import {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe} from '../controllers/ordersController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
//admin fratures


orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment feature
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


// user feature 

orderRouter.post('/userorder', authUser, userOrders)
 // verify payment 

 orderRouter.post('/verifyStripe',authUser, verifyStripe)

export default orderRouter