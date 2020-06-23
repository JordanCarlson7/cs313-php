var Persons = [{ 
    name : "Jordan",
    class: "CS-341",
    desc: "This is above and beyond"
                },
{
    name: "Bro. Porter",
    class: "CS-341",
    desc: "Why yes, it is above and beyond"
}];

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
    else if (req.url == "/aboveAndBeyond") { 
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(`<!DOCTYPE html>
        <html>
        
        <head>
          
        </head>
        
        <body>
        <div id="student">
        <h1 class="name"></h1>
        <h2 class="speak"></h2>
        </div>
        <div id="teacher>
        <h1 class="name"></h1>
        <h2 class="speak"></h2>
        </div>
        <div id="JSON" style="display:none">
            `);
       
        res.write(JSON.stringify(Persons));

        res.write(`
        </div><script>
        var body = document.getElementById('JSON').innerText;
        var jsonData = JSON.parse(body);
        console.log(jsonData);
        
        jsonData.forEach(element => {
            var h1 = document.createElement('H1');
            h1.innerText = element['name'];
            var h2 = document.createElement('H2');
            h2.innerText = element['desc'];
            document.body.appendChild(h1);
            document.body.appendChild(h2);
        });
        </script>
    
    </body>
    
    </html>`);
    res.end(); 
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(`<h1>404: Page Not Found</h1>`);
        res.end();
    }

}
