var express = require('express'),
    http = require('http');

// Create an express application
express()
    .use((req, res, next) => {
        res.end('hello express!');
    }).listen(3000);

console.log('Server running in port 3000');
