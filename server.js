// var express = require('express'),
//     Q = require('q');

console.time();

setTimeout(() => {
    console.timeEnd();
}, 500);

console.time('first');
setTimeout(() => {
    console.timeEnd('first');
}, 1000);

console.time('second');
setTimeout(() => {
    console.timeEnd('second');
}, 2000);




// var app = express()
//     .use(express.static(`${__dirname}/public`))
//     .listen(3000);

// console.log('Server running in port 3000');

