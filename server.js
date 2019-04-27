var express = require('express'),
    Q = require('q');

var p1 = Q.defer().promise; // pending
var p2 = Q.when('fulfill'); // fulfilled
var p3 = p3 = Q.reject(new Error('reject')); // rejected

process.nextTick(() => {
    console.log(p1.isPending());
    console.log(p2.isFulfilled());
    console.log(p3.isRejected());
    
    console.log(p1.inspect());
    console.log(p2.inspect());
    console.log(p3.inspect());
})


var app = express()
    .use(express.static(`${__dirname}/public`))
    .listen(3000);

console.log('Server running in port 3000');

