const express = require('express')
const clients = express.Router() // Esto
let clientData = require('../clients.js') //Client Json
const {Client} = require('../classes.js')


let index = clientData.length;



clients.get(`/clients`, (req, res)=>{
    res.status(200).json(clientData);
})
clients.get(`/client/:id`, (req, res)=>{
    const {id} = req.params
    let clientFound = clientData.filter(item => item.clientID == id);
    res.status(200).json(clientFound)
})
clients.post(`/client`, (req, res) =>{
    
    const client = new Client (req.body)
    index+=1
    client.clientID = index;
    console.log(client.clientID)
    clientData.push(client)

    res.status(201).json({message:`Your client have been created succesfully, your id: ${client.clientID}`})
    
});
clients.delete(`client/:id`, (req, res)=>{
    const {id} = req.params;
    
    let clientFound = clientData.find(client => client.clientID == id);
    let clientIndex = clientData.indexOf(clientFound)
    clientData = clientData.splice(1, clientIndex);
    return res.status(200).json({
        deleted: productFound
    })
})


module.exports = clients;
