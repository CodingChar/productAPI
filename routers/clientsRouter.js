const express = require('express')
const clients = express.Router() // Esto
let clientData = require('../clients.js') //Client Json
const {Client} = require('../classes.js')
const {createUser} = require('../controllers/user-controller.js')

let index = clientData.length;



clients.get(`/clients`, (req, res)=>{
    res.status(200).json(clientData);
})
clients.get(`/client/:id`, (req, res)=>{
    const {id} = req.params
    let clientFound = clientData.filter(item => item.clientID == id);
    res.status(200).json(clientFound)
})
clients.post(`/client`, async (req, res) =>{
    
    const client = new Client (req.body)
    
    const msg = await createUser(client.name, client.lastName)

    res.status(201).json(msg)
    
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
