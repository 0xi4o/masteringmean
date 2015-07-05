var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });

    res.end('Hello Node World');
}).listen(3000);

console.log('Server listening at 127.0.0.1 port 3000');
