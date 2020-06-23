const http = require('http');
const port = process.argv[2];
const urll = require('url');

let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let url = new urll.parse(req.url,true);

    //console.log(url.query.iso);
    
    if (url.pathname == '/parsetime') {
        if (url.query) {
            try {
                let date = new Date(url.query.iso);
                let json = {
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                }
                res.write(JSON.stringify(json));
            }
            catch (err) {
                console.log("error:" + err);
            }
        }
    }
    if (url.pathname == '/unixtime') {
        if (url.query) {
            try {
                let date = new Date(url.query.iso);
                let json = {
                    "unixtime": date.getTime()
                }
                res.write(JSON.stringify(json));
            }
            catch (err) {
                console.log("error:" + err);
            }
        }
    }
})
server.listen(port);