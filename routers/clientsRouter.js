const express = require("express");
const clients = express.Router(); // Esto
const { Client } = require("../classes.js");
const { createUser } = require("../controllers/user-controller.js");

clients.get(`/clients`, (req, res) => {
  res.status(200).json(clientData);
});
clients.get(`/client/:id`, (req, res) => {

});
clients.post(`/client`, async (req, res) => {
  
    const client = new Client(req.body);

  const msg =  createUser(client.lastName)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(400).json(err))

});
clients.delete(`client/:id`, (req, res) => {

});

module.exports = clients;
