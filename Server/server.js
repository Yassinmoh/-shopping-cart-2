const express = require('express')
const bodyParser = require('body-parser')
const ProductRoutes= require('./routes/ProductRoutes')
const OrderRoutes=require('./routes/orderRoutes')
require('dotenv').config()
const PORT=process.env.PORT || 4000
require('./DB')
const app = express()
// app.use(bodyParser.json())
app.use(express.json())
console.log(process.env.NODE_ENV);

app.use('/',ProductRoutes)
app.use('/',OrderRoutes)


if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('public'))

    app.get('/',(req, res) => res.sendFile(__dirname +"/public/index.html"))
}else{
    app.get('/',(req, res) => res.send("API Running"))
}


app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
})






