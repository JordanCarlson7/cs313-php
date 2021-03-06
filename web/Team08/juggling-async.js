const http = require('http');
const bl = require('bl');
var results = [];
count = 0;


function printResults() {
    for (var i = 0; i < 3; i++)
        console.log(results[i]);
}

function httpGet(index) {

    http.get(process.argv[2 + index], callback);
    function callback(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return err;
            }
    
            results[index] = data.toString();
            count++;
    
            if (count == 3) {
                printResults();
            }
        }));
    }

}



for (var i = 0; i < 3; i++) {
    httpGet(i);
}