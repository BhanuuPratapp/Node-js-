
//const http  = require('http');
//const fs = require('fs');
//const routes = require('./routes');
const express = require('express');
const { addListener } = require('nodemon');

const app = express();
//const server = http.createServer(app)

app.use((req, res, next) =>{
    console.log("in the middleware")
    next();
})
app.use((req, res, next)=> {
    console.log("in the next middleware")
    res.send('<h1>hello from express</h1>')
})

//server.listen(4000)
app.listen(2000)

