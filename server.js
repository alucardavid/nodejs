var express = require('express');

express()
    .use('/home', (req, res, next) => {
        console.log(`first: ${req.url}`);
        next();
    })
    .use((req, res, next) => {
        console.log(`second: ${req.url}`);
        next();
    })
    .listen(3000);