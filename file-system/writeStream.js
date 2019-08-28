const fs = require('fs');

let data = 'Reading using a writeStream';

let writeStream = fs.createWriteStream(__dirname+'/file1.txt', {encoding :'utf8'});

writeStream.write(data);

writeStream.on('finish', function(){
    console.log('Finished Writing');
});

writeStream.on('error', function() {
    console.log(err);
})

