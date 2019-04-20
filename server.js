var express = require('express'),
    cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser('DevGenius@123'))
    .use('/toggle', (req, res) => {
        if (req.signedCookies.name) {
            res.clearCookie('name');
            res.end(`name cookie cleared! Was: ${req.signedCookies.name}`);
        }
        else{
            res.cookie('name', 'foo', { signed: true, httpOnly: true, httpOnly: true, secure: true, maxAge: 900000 });
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