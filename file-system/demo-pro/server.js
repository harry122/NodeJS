const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', function(req,res) {
    
    // fs.readFile(__dirname+'/file1.txt', function(err,data){
    //     if(err){
    //         res.end(err);
    //         res.end('Something went Wrong');
    //     }
    //     else {
    //         res.end(data);
    //     }
    // })
    
    server.on('request', function(req, res) {

        let readStream = fs.createReadStream(__dirname+'/file1.txt');
        readStream.pipe(res);
    })

});

server.listen(3005, () => console.log('Server up n running'));