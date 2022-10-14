const http  = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.headers,req.method)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    
    res.write('<head><title>welcome to home page</title></head>')
    res.write('<body><h1>Heloo from my nodejs server</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(4000)
