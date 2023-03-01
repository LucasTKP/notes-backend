const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(routes)

app.listen(5000, () => {
    console.log('Servidor ligado 🚀')
})