const http = require('http');

var nodeStream = http.get(process.argv[2], callback);

function callback (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        response.setEncoding('utf8');
        console.log(data);
    });
}