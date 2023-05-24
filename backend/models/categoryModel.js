const mongoose = require("mongoose");

//genre
const categorySchema = mongoose.Schema({
    name:{type:String,requied:true},
    description:{type:String, default:"One of the genres that exists"},
    image:{type:String},
    //if needed for additional information to be added
    //attrs:[{key:{type:String}, value:{type:String}}]
});

const Category =mongoose.model("Category", categorySchema)
module.exports=Category;