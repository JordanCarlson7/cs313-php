const net = require('net');
const port = process.argv[2];

let server = net.createServer(listener);
server.listen(port);

    //log  format "YYYY-MM-DD hh:mm"
    //new line zero-filled 2 integers
    //"2013-07-06 17:42"


function listener(socket) {
    let date = new Date();
    let month = date.getMonth() + 1;
    month = month > 10 ? month : '0' + month;
    let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate()
    let data = date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes();
    try {
    
    socket.write(data);
    socket.end("\n");
    }
    catch (err) {
        console.log(err);
    }
}