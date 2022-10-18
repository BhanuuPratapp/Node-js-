
//const http  = require('http');
//const fs = require('fs');
//const routes = require('./routes');
const express = require('express');
//const { addListener } = require('nodemon');
const parser = require('body-parser')
const adminroutes = require('./routes/admin.js')
const shoproutes = require('./routes/shop.js')
const app = express();

app.use(parser.urlencoded({extended: false}))
app.use('/admin',adminroutes);
app.use(shoproutes);


app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found</h1>')
})
//server.listen(4000)
app.listen(2000)

//////////////////////////////////////////

const express = require('express');

const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    res.send('<form action = "/admin/add-product" method="POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">Send</button></form>')

})
router.post('/add-product',(req,res,next)=>{
console.log(req.body);
res.redirect('/')
})

module.exports = router;

///////////////////////////////////

const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>hello form Express.js</h1>') 
})

module.exports=router ;
