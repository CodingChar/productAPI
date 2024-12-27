const { generateShortID } = require("../id.js");
const { db } = require("../database.js");
let sql;

const userQuery = `CREATE TABLE users(id CHAR(12) NOT NULL PRIMARY KEY, 
                   name CHAR(32) NOT NULL,
                   lastName CHAR(32) NOT NULL)`;

//Create functions
const createUserTable = () => {
  return db.run(userQuery, (err) => {
    if (err) return console.error(err.message);
    console.log("The table was created succesfully ");
  });
};

const createUser = async (name, lastName) => {
  /*let id = generateShortID()
    sql = `INSERT INTO users(id, name, lastName) values (?,?,?)`
    return db.run(sql, [id, name, lastName], (err) => {
        if(err) return console.error(err.message);
        console.log(`The user was made with the ID -> ${id}`) 
    })
    */
  const id = generateShortID();
  sql = `INSERT INTO users(id, name, lastName) values (?,?,?)`;

  try {
    const message = await new Promise((resolve, reject) => {
      let user = { id, name, lastName };
      db.run(sql, [id, name, lastName], (err) => {
        if (err) reject(err);
        resolve(user);
      });
    });
    return message;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const getAllUsers = () => {
  return db.all("SELECT * FROM users", (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
      console.log(row);
    });
  });
};

//Test functions
//getAllUsers()

module.exports = {createUser}