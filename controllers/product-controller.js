const { generateShortID } = require("../id.js");
const { db } = require("../database.js");
let sql;

/*

    productName: 'Arroz',
    productCode: 0,
    description: '',
    price: 500

*/

const productQuery = `CREATE TABLE products(productID CHAR(12) NOT NULL PRIMARY KEY,   
    productName CHAR(32) NOT NULL,   
    description CHAR(256) NOT NULL, 
    price DECIMAL(10,2) NOT NULL)`;

const createProductTable = () => {
  return db.run(productQuery, (err) => {
    if (err) return console.error(err.message);
    console.log("The table was created succesfully ");
  });
};

const createProduct = async (productName, description, price) => {   
    const id = generateShortID()
    
    sql = `INSERT INTO products(productID, productName, description, price) VALUES (?, ?, ?, ?)`

    try{
        const message = await new Promise((resolve, reject) => {
            let product = {id, productName, description, price}
            db.run(sql, [id, productName, description, price], err => {
                if(err) reject(err)
                resolve(product)
            })
        })
        return message
    }catch(error){
        console.error(error.message)
        throw error;
    }
};


module.exports = {createProduct}