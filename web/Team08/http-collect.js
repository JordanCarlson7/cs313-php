const http = require('http');


var nodeStream = http.get(process.argv[2], callback);

function callback (response) {
    const bl = require('bl');
    response.pipe(bl(function (err,data) {
        console.log(data.length)
        console.log(data.toString());
    }));
}