var express = require('express'),
    cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use('/toggle', (req, res) => {
        if (req.cookies.name) {
            res.clearCookie('name');
            res.end(`name cookie cleared! Was: ${req.cookies.name}`);
        }
        else{
            res.cookie('name', 'foo');
            res.end('name cookie set!');
        }
    })
    .use((req, res) => {
        if (req.cookies.name) {
            console.log('User name:', req.cookies.name);
        }
        else {
            res.cookie('name', 'foo');
        }
        res.end('Hello!');
    })
    .listen('3000');