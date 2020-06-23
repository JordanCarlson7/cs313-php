const fs = require('fs');
var buf = fs.readFile(process.argv[2], callback);

function callback (err, data) {
    if (err) {
        return err;
    }

    data = data.toString();
    var newLines = data.split('\n');
    console.log(newLines.length - 1);
}
