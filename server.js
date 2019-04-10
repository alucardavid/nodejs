var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('Error 404: Resource not found.');
    response.end();
}

var mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html'
}

var server = http.createServer((req, res) => {
    if (req.method == 'GET') {

        var fileUrl;

        if (req.url == '/') {
            fileUrl = '/index.html';
        }
        else {
            fileUrl = req.url;
        }
        
        var filepath = path.resolve('./public' + fileUrl);
        var fileExt = path.extname(filepath);
        var mimeType = mimeLookup[fileExt];

        if (!mimeType) {
            send404(res);
            return;
        }
        
        fs.exists(filepath, exists => {
            if (!exists) {
                send404(res);
                return;
            }
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream('./public/index.html').pipe(res);
        });
    }
    else {
        send404(res);
    }
}).listen(3000);

console.log('server running on port 3000');
