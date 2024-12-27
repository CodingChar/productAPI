const express = require('express');
const app = express();


require('./database.js')



const clientRouter = require('./routers/clientsRouter')
const productRouter = require('./routers/productsRouter')
const invoiceRouter = require('./routers/invoiceRouter')


app.use(express.json())


app.use(clientRouter)
app.use(productRouter)
app.use(invoiceRouter)


const port = 3000; 


app.get('/', (req,res ) => {
    res.send('Hello')
})


app.listen(port, err => {
    if(err) throw err;
    console.log(`http://localhost:${port}`)
})