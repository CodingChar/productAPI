const express = require('express')
const products = express.Router() // Esto


const {createProduct} = require('../controllers/product-controller.js')
 
const {Product} = require('../classes.js')



products.get('/products', (req,res) => {
    res.status(200).json(productData)
})

products.get('/product/:id' , (req,res) => {


})

products.post('/product', async (req,res) => {
    const product = new Product(req.body)

    let msg  = await createProduct(product.productName, product.description, product.price)

    res.json(msg)
})
products.delete('/product/:id', (req,res) => {
})


module.exports = products