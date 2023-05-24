//file only for testing

const connectDB =require("../config/db")

connectDB()

const categoryData =require("./category")
const bookData =require("./BookSeeder")
const reviewData=require("./ReviewSeeder")
const userData=require("./userSeeder")
const cartData= require("./Cartseeder")

const Category=require("../models/categoryModel")
const Book=require("../models/BookModel")
const Review=require("../models/ReviewModel")
const books = require("./BookSeeder")
const users = require("../models/userModel")
const Orders=require("../models/cartModel")

const importData= async()=>{
    try{
        await Category.collection.dropIndexes()
        await Book.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Book.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await users.collection.deleteMany({})
        await Orders.collection.deleteMany({})

        
        await Category.insertMany(categoryData)
        await Book.collection.insertMany(bookData)
        const reviews= await Review.collection.insertMany(reviewData)
        const sampleBooks=bookData.sampleBooks((books)=>{
            reviews.map((review)=>{
                books.reviews.push(review._id)
            })
            return{...books}
        }) 

        await Book.insertMany(sampleBooks)
        await users.insertMany(userData)
        await Orders.insertMany(cartData)
        console.log("seeder data proceeded successfuly")
        process.exit()
    } catch(error){
        ("there was an error")
    }
}