
var connect = require('connect');
var util = require('util');

// function logit(req, res, next) {
//     util.log(`Request received: ${req.method}, ${req.url}`);
//     next();
// }

// function auth(req, res, next){

//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//         send401(res);
//         return;
//     }
    
//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var user = auth[0];
//     var pass = auth[1];
    
//     if (user == 'foo' && pass == 'bar') {
//         console.log(req);
        
//         next();
//     }
//     else {
//         send401(res);
//     }

//     function send401(res) {
//         res.writeHead(401, {'WWW-Authenticate': 'Basic'});
//         res.end();
//     }
// }

// let echo = {
//     handle: (req, res, next) => {
//         req.pipe(res);
//     }
// }

var app = connect()
            .use((req, res, next) => { next(new Error('Big bad error details')); })
            .use((req, res, next) => { res.end('I will never ge called'); })
            .use((err, req, res, next) => {
                console.log('Error handled:', err.message);
                console.log('Stacktrace:', err.stack);
                
                res.writeHead(500);
                res.end('Unable to process the request');
            })
            .listen(3000);

console.log('server running on port 3000');
