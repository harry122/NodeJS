const fs = require('fs');

// fs.mkdirSync('Created');

fs.unlinkSync('./Created/hello.js');

fs.rmdirSync('Created');



// fs.mkdir('Created', function() {
//     fs.readFile('Events/file-system/file.txt','utf8', function(err, data) {
//     fs.writeFile('./Created/writeFile.txt', data, function(err, data) {
//         console.log(data);
//     });
//     });
// });


