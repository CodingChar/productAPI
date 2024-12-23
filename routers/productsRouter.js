const express = require('express')
const products = express.Router() // Esto
let productData = require('../products.js')

const {Product} = require('../classes.js')


let index = productData.length;

products.get('/products', (req,res) => {
    res.status(200).json(productData)
})

products.get('/product/:id' , (req,res) => {
    const {id} = req.params;

    const product = productData.filter(product => product.productCode == id)

    console.log(product)
    res.status(200).json(product)

})

products.post('/product', (req,res) => {
    const product = new Product(req.body)
    
    index+=1
    product.productCode = index;

    productData.push(product)

    res.status(201).json({
        message: `A product has been added with the ID${product.productCode}`,
        url: `${req.protocol}://${req.host}:3000/product/${product.productCode}`
    })
})
products.delete('/product/:id', (req,res) => {
    const {id} = req.params;

    let productFound = productData.find(product => product.productCode == id);
    let productIndex = productData.indexOf(productFound)
    productData = productData.splice(1, productIndex);
    return res.status(200).json({
        deleted: productFound
    })
})


module.exports = products