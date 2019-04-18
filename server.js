var express = require('express');
    

// Create an express application
express()
    .use(express.static(`${__dirname}/public`)).listen(3000);

console.log('Server running in port 3000');
