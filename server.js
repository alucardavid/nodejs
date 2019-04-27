var express = require('express'),
    Q = require('q');
 
Q.when(null)
    .then(() => {
        return 'kung foo';
    })
    .then(val => {
        console.log(val);
        return Q.when('panda');
    })
    .then(val => {
        console.log(val);
    })
    .then(val => {
        console.log(val == undefined);
        
    });

Q.when(null)
    .then(() => {
        throw new Error('panda'); // uncaught exception
    })
    .then(val => {
        console.log(`!!!!! ${val}`); // I will never get called
    })
    .catch(reason => {
        console.log(`Someone threw a ${reason.message}`);
        return 'all good';        
    })
    .then(val => {
        console.log(val); // all goood
        return Q.reject(new Error('taco'));
    })
    .then(val => {
        console.log(`!!!!!!! ${val}`); // I will never get called
    })
    .catch(reason => {
        console.log(`Someone threw a ${reason.message}`);
    });

var app = express()
    .use(express.static(`${__dirname}/public`))
    .listen(3000);

console.log('Server running in port 3000');

