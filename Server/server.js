const express = require('express')
const bodyParser = require('body-parser')
const ProductRoutes= require('./routes/ProductRoutes')
const OrderRoutes=require('./routes/orderRoutes')
require('./DB')
const app = express()
// app.use(bodyParser.json())
app.use(express.json())


app.listen(4000, (req, res) => {
    console.log('server is running on port 4000')
})

app.use('/',ProductRoutes)
app.use('/',OrderRoutes)




