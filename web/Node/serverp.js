var Person = {
    name : "Jordan",
    class: "CS313",
    desc: "This is above and beyond because it uses an AJAX request"
}

var http = require ('http');
var server = http.createServer(onRequest);
server.listen(8888);

function onRequest(req, res) {
    console.log("Request location: " + req.url);
    if (req.url == "/home") {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.write(`<h1>Welcome to the Home Page</h1>`); 
        res.end();
    }
    else if (req.url == "/getData") { 
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(Person));
        res.end(); 
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(`<h1>404: Page Not Found</h1>`);
        res.end();
    }

}
