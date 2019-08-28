const fs = require('fs');

let readerStream =  fs.createReadStream(__dirname+'/inpt.txt');

renderStream = readerStream.setEncoding('utf8');


let data = '';

renderStream.on('data', function(chunk) {
    console.log('chunk',chunk);
    data += chunk;
});

renderStream.on('error', function(err) {
    console.log(err);
});

renderStream.on('end', function() {
    console.log('Done Reading');
    console.log(data);
});