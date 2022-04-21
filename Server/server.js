const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Product =require('./models/Product')
const ProductRoutes= require('./routes/ProductRoutes')
require('./DB')
const app = express()
// app.use(bodyParser.json())
app.use(express.json())

// Server
app.listen(3000, (req, res) => {
    console.log('server is running on port 3000')
})

app.use('/',ProductRoutes)

// Show All



