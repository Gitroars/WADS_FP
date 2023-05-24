const mongoose = require("mongoose")

//get the reviews that exist with the names of who made it
const reviewSchema= mongoose.Schema({
    comment: {type: String, required: true},
    rating: { type: Number, required: true},
    user:{
        _id:{type: mongoose.Schema.Types.ObjectId, required:true},
        name:{type:String, required: true}
    }
},{
    //shows when it is created to easily find when made
    timestamps: true,
  })

const Review = mongoose.model("Review", reviewSchema)

module.exports(Review)