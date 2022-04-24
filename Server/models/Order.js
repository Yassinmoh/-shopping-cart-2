const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    name:String,
    email:String,
},{timestamps:true})

const Order = mongoose.model('order',OrderSchema)
module.exports=Order