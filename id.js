const {v4: uuidv4} = require('uuid')
const crypto = require('crypto')

function generateShortID(){
    return uuidv4().replace(/-/g,'').slice(0,12);
}


module.exports = {generateShortID}