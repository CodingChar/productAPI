


class Client{
    name; 
    lastName;
    clientID;
    constructor(body){
        this.name = body.name;
        this.lastName = body.lastName
        this.clientID = body.clientID
    } 
}

class Invoice{
    date;
    totalItems;
    totalPrice;
    clientID;
    invoiceID;
    items;
    constructor(body){
        this.date = body.date;
        this.totalItems = body.totalItems;
        this.totalPrice = body.totalPrice;
        this.clientID =  body.clientID
        this.invoiceID = body.invoiceID
        this.items = body.items

    }
}

class Product{
    productName;
    productCode;
    description;
    price;
    constructor(body){
        this.productName = body.productName;
        this.productCode = body.productCode;
        this.description = body.description;
        this.price = body.price
    }
}

module.exports = {Product, Client, Invoice}