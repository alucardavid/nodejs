var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('nothing passed in!');
});

app.get(/^\/[0-9]+$/, (req, res) => {
    res.send('number!');
});

app.get('/*', (req, res) => {
    res.send('not a number!');
});

app.listen(3000);