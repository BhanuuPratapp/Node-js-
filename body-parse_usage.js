
//const http  = require('http');
//const fs = require('fs');
//const routes = require('./routes');
const express = require('express');
//const { addListener } = require('nodemon');
const parser = require('body-parser')
const app = express();

app.use(parser.urlencoded({extended: false}))

app.use('/add-chinese',(req, res, next) =>{
    console.log("in the middleware")
    res.send('<h1>add product</h1>')
  
})

app.use('/add-product',(req,res,next)=>{
    res.send('<form action = "/product" method="POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">Send</button></form>')

})
app.use('/product',(req,res,next)=>{
console.log(req.body);
res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello form Express.js</h1>') 
})

//server.listen(4000)
app.listen(2000)

