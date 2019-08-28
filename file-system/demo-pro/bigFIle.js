const fs = require('fs');

let writeStream = fs.createWriteStream(__dirname+'/file1.txt', {encoding :'utf8'});

for(let i = 0 ;i <= 1e6; i++) {
    writeStream.write(`Plans`);
}


writeStream.end();