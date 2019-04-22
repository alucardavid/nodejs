var express = require('express'),
    expressSession = require('express-session');

var MongoStore = require('connect-mongo')(expressSession);


var app = express()
    .use(expressSession({
        secret: 'DevGenius@123',
        store: new MongoStore({ url: 'mongodb://127.0.0.1:27017/session'})
    }))
    .use('/home', (req, res) => {
        if (req.session.views) {
            req.session.views++;
        }
        else{
            req.session.views = 1;
        }

        res.end(`Total views for you: ${req.session.views}`)
    })
    .use('/reset', (req, res) => {
        delete req.session.views;
        res.end('Cleared all your views');
    })
    .listen(3000);
