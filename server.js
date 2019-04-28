// var express = require('express'),
//     Q = require('q');

function foo() {
    var stack = new Error('trace at foo error').stack;
    
    // Type one
    console.trace('trace at foo');

    // Type two
    console.log(stack);

    // Executi[on continues
    console.log('Stack trace printed');
    
}

function bar(){
    foo();
}

bar();


// var app = express()
//     .use(express.static(`${__dirname}/public`))
//     .listen(3000);

// console.log('Server running in port 3000');

