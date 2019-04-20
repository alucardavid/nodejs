var express = require('express'),
    compression = require('compression');

var app = express()
    .use(compression())
    .use(express.static(`${__dirname}/public`))
    .listen(3000);
    