import mongoose from "mongoose"
 



const OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
        },
        
    products:[
        {
            productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
           },
            size:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }   
    ],
    totalAmount:{
        type:Number,
        required:true
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
      },
      paymentStatus: {
        type: String,
        enum: ['Cash On Delivery', 'Paid'],
        default: 'Cash On Delivery'
      },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
      },
},{timestamps:true})



const Order=mongoose.models.Order || mongoose.model("Order",OrderSchema)

export default Order;
