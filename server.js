var express = require('express'),
    Q = require('q');

var loadItem = Q.nbind((id, cb) => {
    setTimeout(() => {
        cb(null, { id: id});
    }, 500);
});

Q.all([loadItem(1), loadItem(2)])
    .then(items => {
        console.log(`Items: ${JSON.stringify(items)}`);
    })
    .catch(reason => {
        console.log(reason);
    });


var app = express()
    .use(express.static(`${__dirname}/public`))
    .listen(3000);

console.log('Server running in port 3000');

