// This script is to query books in the database
const mongoose = require("mongoose");

const Review = require("./ReviewModel")
const imageSchema=mongoose.Schema({
  path: {type:String,required:true}
})

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  cost:{
    type: Number,
    required: true
  },
  rating:{
    type: Number,

  },
  reviewsNumber:{
    type: Number,
  },
  
  attributes:{
    images:[imageSchema],
    reviews:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: Review,
    }]
  }

},{
  //shows when it is created to easily find when made
  timestamps: true,
});

bookSchema.index({title: "text", description:"text"}, {title:"TextIndex"})
bookSchema({"attributes.key":1,"attributes.value":1})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
