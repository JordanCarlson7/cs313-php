const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], callback);

function callback (err, list) {
    if (err) {
        return err;
    }

    var filtered = list.filter(element => path.extname(element) == "." + process.argv[3]);
    for (var i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
    }
}
