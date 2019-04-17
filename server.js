
var https = require('https');
var fs = require('fs');
var app = require('connect')();

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, (req, res) => {
    res.end('secure!');
}).listen(443);

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(301, {Location: `https://${req.headers['host']+req.url}`});
    res.end();
}).listen(80);

console.log('Servidor rodando na porta 3000');

