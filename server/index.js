

const express =require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT || 3000
// const home = require('./routes/home.mjs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


let routes = require('./router') //importing route
routes(app)
// app.use("/",home);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
console.log('RESTful API server started on: ' + port);