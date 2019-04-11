
var connect = require('connect');
var util = require('util');

function logit(req, res, next) {
    util.log(`Request received: ${req.method}, ${req.url}`);
    next();
}

let echo = {
    handle: (req, res, next) => {
        req.pipe(res);
    }
}

var app = connect()
            .use('/echo', echo)
            .use((req, res) => {res.end('Wassup!')})
            .listen(3000);

console.log('server running on port 3000')
