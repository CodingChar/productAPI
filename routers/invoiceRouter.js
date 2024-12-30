const express = require('express')
const invoices = express.Router() // Esto
const {Invoice} = require('../classes.js')





invoices.post('/invoice' , (req,res) => {

})


invoices.get('/invoices', (req, res)=>{

})
invoices.get('/invoices/:id', (req, res)=>{

})







module.exports = invoices;

