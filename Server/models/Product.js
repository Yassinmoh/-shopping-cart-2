const mongoose = require('mongoose')


const ProductSchema= new mongoose.Schema({
    id: String,
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    size: [String]
})


const Product = mongoose.model('product',ProductSchema)
module.exports=Product