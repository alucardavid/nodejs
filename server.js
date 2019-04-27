var express = require('express'),
    Q = require('q')
    fs = require('fs');

var readFileAsync = Q.nbind(fs.readFile);

function loadJSONAsync(filename) {
    return readFileAsync(filename)
                .then(res => {
                    return JSON.parse(res);
                });
}

// good json file
loadJSONAsync('good.json')
    .then(val => console.log(val))
    .catch(err => console.log(`good.json erro ${err.message}`))
    .then(() => loadJSONAsync('absent.json'))
    .then(val => console.log(val))
    .catch(err => console.log(`absentjson error ${err.message}`))
    .then(() => loadJSONAsync('bad.json'))
    .then(val => console.log(val))
    .catch(err => console.log(`bad.json error ${err.message}`));


var app = express()
    .use(express.static(`${__dirname}/public`))
    .listen(3000);

console.log('Server running in port 3000');

