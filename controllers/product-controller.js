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
        const response = await new Promise((resolve, reject) => {
            let product = {id, productName, description, price}
            db.run(sql, [id, productName, description, price], err => {
                if(err) reject(err)
                resolve(product)
            })
        })
        return response
    }catch(error){
        console.error(error.message)
    }
};


const findProduct = async (id) => {
    
    sql = `SELECT * FROM products WHERE productID = ?;`
    
    console.log('executing')
    try{
        const response  = await new Promise((resolve, reject) => {
            let product = {}
            db.all(sql, [id], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
        return response
    }catch(error){
        console.error(error.message)
    }

}
const deleteProduct = async (id) => {

    sql =  `DELETE FROM products WHERE productID=?`
    try{
        
        const message = await new Promise((resolve, reject) => {
            db.run(sql, [id], (err) => {
                if(err) reject(err)
                resolve()
            })
        })

    }catch(error){
        console.error(error)
    }
} 


const main = async() => {
}   
main()



module.exports = {createProduct}                                                 