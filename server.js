// var http = require('http');
//
// http.createServer(function(req,res) {
//     res.writeHead(200,{
//         'Content-Type': 'text/plain'
//     });
//
//     res.end('Hello Node World');
// }).listen(3000);
//
// console.log('Server listening at 127.0.0.1 port 3000');

//Connect framework
// var connect = require('connect');
// var app = connect();
//
// var logger = function(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// };
//
// var helloNode = function(req, res, next) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Node World');
// };
//
// var goodBye = function(req, res, next) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Good Bye');
// };
//
// app.use(logger);
// app.use('/hello', helloNode);
// app.use('/goodbye', goodBye);
//
// app.listen(3000);
//
// console.log('Server listening at 127.0.0.1 port 3000');


//Express framework
var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello Express World');
});

app.listen(3000);
console.log('Server listening at 127.0.0.1 port 3000');

module.exports = app;
