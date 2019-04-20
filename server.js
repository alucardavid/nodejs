var express = require('express'),
    serverIndex = require('serve-index');

var app = express()
    .use(express.static(`${__dirname}/public`))
    .use(serverIndex(`${__dirname}/public`))
    .listen(3000);

