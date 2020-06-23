const http = require('http');
const port = process.argv[2];
const file = process.argv[3];
const fs = require('fs');

var readStream = fs.createReadStream(file);
var server = http.createServer(callback);

function callback (req, res) {
    readStream.pipe(res);
    res.write();
}

server.listen(port);
