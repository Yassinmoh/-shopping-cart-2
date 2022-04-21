const express=require('express')
const Product =require('../models/Product')
const router =express.Router()


router.get('/api/products',async (req, res) => {
    const products = await Product.find()
    res.status(200).send(products)
})

// Add Product
router.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body)
    const saveProduct = await newProduct.save()
    res.status(201).send(saveProduct)
})

// Remove Product
router.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})

module.exports =router

