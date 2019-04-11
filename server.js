
var connect = require('connect');
var util = require('util');

function logit(req, res, next) {
    util.log(`Request received: ${req.method}, ${req.url}`);
    next();
}

function auth(req, res, next){

    var authHeader = req.headers.authorization;
    if (!authHeader) {
        send401(res);
        return;
    }
    
    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    
    if (user == 'foo' && pass == 'bar') {
        console.log(req);
        
        next();
    }
    else {
        send401(res);
    }

    function send401(res) {
        res.writeHead(401, {'WWW-Authenticate': 'Basic'});
        res.end();
    }
}

// let echo = {
//     handle: (req, res, next) => {
//         req.pipe(res);
//     }
// }

var app = connect()
            .use('/admin', auth)
            .use('/admin', (req, res) => {res.end('Authorized!')})
            .use((req, res) => {res.end('Public')})
            .listen(3000);

console.log('server running on port 3000')
