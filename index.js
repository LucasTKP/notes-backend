const express = require('express')
const app = express()
const routes = require('./routes')
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(5000, () => {
    console.log('Servidor ligado 🚀')
})