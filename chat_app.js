
const http  = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url ==='/' )
    {
       // const filepath = path.join(__dirname, "message.txt")
        fs.readFile("message.txt", {encoding: "utf-8"},(err, data)=>{
            if(err){
               console.log(err);
         }
       console.log(data);
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body> <form action ="/message" method="POST"><input type="text" name = "message"></input> <button type ="submit">Send</button></form></body>')
        res.write('</html')
        return res.end();
       })
    }
    else if(url === "/message" && method ==="POST")
    {
        const body = [];
        req.on('data',(chunk) =>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', ()=>{
            const parsebody = Buffer.concat(body).toString();
            const message = parsebody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302
            res.setHeader('Location','/');
            return res.end();
        })
        
        
    }
    else{
    console.log(req.url, req.headers,req.method)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>welcome to home page</title></head>')
    res.write('<body><h1>Heloo from my nodejs server</h1></body>')
    res.write('</html>')
    res.end();
    }
})

server.listen(4000)
