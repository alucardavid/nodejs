var express = require('express'),
    timeout = require('connect-timeout');

var app = express()
    .use('/api', timeout(5000), 
    (req, res, next) => {

    },
    (error, req, res, next) => {
        if (req.timedout) {
            res.statusCode = 500;
            res.end('Request timed out');
        }
        else {
            next(error);
        }
    })
    .listen(3000);
    