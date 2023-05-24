const ObjectId = require("mongodb").ObjectId
const orders={
           user:ObjectId (),
           orderTotal:{
            itemscount:3,
            cartSubtotal: subtotal},
        
        
        cartItems:[
            {
            name:'lord of the rings',
            price:'20',
            image:'sth.png'
        }
    ],
        paymentMethod:"paypal",
        isPaid:false,}


module.exports=orders