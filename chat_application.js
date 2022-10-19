
const express = require('express');

const parser = require('body-parser')
const loginroutes = require('./routesforChatApllication/login.js')
const messageroutes = require('./routesforChatApllication/message.js')
const app = express();

app.use(parser.urlencoded({extended: false}))
app.use(loginroutes);
app.use(messageroutes);


app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(1000)

////////////////////////////////

const express = require('express');
const fs = require('fs');


const router = express.Router();


router.get('/login',(req,res,next)=>{
 
    
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>')
  
})

router.post('/login',(req,res,next)=>{
    
console.log(req.body.title);
res.redirect('/');

})

module.exports = router;
///////////////////////////////////////////

const express = require('express');
const fs = require('fs')

const router = express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile("message1.txt", (err, data) => {
        if(err){
            console.log(err)
            data = 'no chat'
        } 
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username1').value=localStorage.getItem('username')" method = "POST"><input type ="text" id="username"name ="message"><input type="hidden" id="username1"name="username" placeHolder="message"><button type ="submit">Send</button>`)

    })
})

router.post('/',(req, res, next) =>{
    fs.writeFile("message1.txt", `${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err? console.log(err): res.redirect('/') 
      
    })

})
module.exports=router ;
