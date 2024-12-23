const express = require('express')
const invoices = express.Router() // Esto
const invoiceData = require(`../invoice.js`)
const clientData = require('../clients.js')
const {Invoice} = require('../classes.js')




let index = invoiceData.length;

invoices.post('/invoice' , (req,res) => {
    const invoice = new Invoice(req.body)
    
    invoice.date = new Date().toDateString()
    invoice.totalItems = invoice.items.length;
    invoice.totalPrice = invoice.items.reduce((prev, curr) => prev+curr.price, 0)
    index+=1;
    invoice.invoiceID = index;
    let clientFound = clientData.filter(item => item.clientID == invoice.clientID);
    console.log(clientFound)
    if(clientFound.length <= 0){
        res.status(404).send(`There is no user found with the id: ${invoice.clientID}`)
    }
    invoiceData.push(invoice)
    res.status(201).json(invoice)
})


invoices.get('/invoices', (req, res)=>{
    res.status(200).json(invoiceData);
})
invoices.get('/invoices/:id', (req, res)=>{
    const {id} = req.params
    let invoiceFound = invoiceData.filter (item => item.invoicID === id);
    res.status(200).json(invoiceFound);
})







module.exports = invoices;

