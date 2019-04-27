// var express = require('express'),
//     Q = require('q');

function* generator() {
    var bar = yield 'foo';
    console.log(bar);
}

function* generator2() {
    try {
        yield 'foo';
    } catch (err) {
        console.log(err.message);
        
    }
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// Resume exection injecting bar
var nextThing = iterator.next('bar');
console.log(iterator.next());

var errIterator = generator2();

var foo = errIterator.next();
console.log(foo.value);
var nextThing = errIterator.throw(new Error('bar'));



// var app = express()
//     .use(express.static(`${__dirname}/public`))
//     .listen(3000);

// console.log('Server running in port 3000');

