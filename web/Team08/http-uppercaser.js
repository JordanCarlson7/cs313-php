const http = require('http');
const port = process.argv[2];
const map = require('through2-map');


let server = http.createServer(function(req, res) {
    req.pipe(map(function (chunck) {
        try {
        var split = chunck.toString().split('');
        for(var i = 0; i < split.length; i++) {
            split[i] = split[i].toUpperCase();
        }
        var join = split.join('');
        return join;
    }
    catch (err) {
        console.log("error:" + err);
    }
    })).pipe(res);
    
});

server.listen(port);


