const mongoose = require("mongoose");
//to find which user is buying
const User =require("./userModel")

const orderSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:true, ref:User},
    orderTotal:{
        itemsCount:{type:Number,required:true},
        cartSubtotal:{type:Number,required:true}
},
    cartItems:{
        name:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:String,required:true}
    },

    ispaid:{
        type:Boolean,
        required:true,
        default:false
    }
},{

    timestamps:true,
});

const Order= mongoose.model("Order",orderSchema)
module.exports=Order