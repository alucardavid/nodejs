var express = require('express'),
    Q = require('q');
 
var willFulfillDeferred = Q.defer();
var willFulfill = willFulfillDeferred.promise;
willFulfillDeferred.resolve('final value');

willFulfill
    .then(function(val) {
        console.log(`success with ${val}`);
    })
    .catch(function(reason) {
        console.log(`failed with ${reason}`);
    });

var willrejectDeferred = Q.defer();
var willreject = willrejectDeferred.promise;
willrejectDeferred.reject(new Error('rejection reason')); // Note the use of Error

willreject
    .then(function(val){
        console.log(`success with ${val}`);
    })
    .catch(function(reason) {
        console.log(`failed with ${reason}`);
    });

Q.when(null).then(function(val){
    console.log(val == null); // true
});

Q.when('kung foo').then(function(val){
    console.log(val); // kung foo
});

console.log('I will print first because *then* is always async! ');



var app = express()
    .use(express.static(`${__dirname}/public`))
    .listen(3000);

console.log('Server running in port 3000');

