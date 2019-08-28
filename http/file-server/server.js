const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer();

server.on('request', function(req, res) {

     let parsedURL = url.parse(req.url,true);
     
     if(parsedURL.pathname == "/"){
    fs.readFile(__dirname+'/welcome.html', {encoding:'utf8'}, function(err,data) {
        if(err){
            res.writeHead(500, {'content-type' : 'text/html'})
            res.end('Something went wrong ,please try again');
        }
        else{
            res.writeHead(200 , {'content-type': 'text/html'})
            res.write(data);
            res.end();
        }
    });
} else if(parsedURL.pathname == '/contact' && req.method == "GET"){
    fs.readFile(__dirname+'/contact.html', {encoding:'utf8'}, function(err,data) {
        if(err){
            res.writeHead(500, {'content-type' : 'text/html'})
            res.end('Something went wrong ,please try again');
        }
        else{
            res.writeHead(200 , {'content-type': 'text/html'})
            res.write(data);
            res.end();
        }
    });

} else if(parsedURL.pathname == '/submit'){
    let query = parsedURL.query;
    res.end(`Name ${query.name} phone :${query.phone}`)

} else if(parsedURL.pathname == '/contact' && req.method == "POST"){
    console.log(parsedURL);
    res.end("Data received successfully");
}

else {
    res.writeHead(404,{'content-type:': 'text/html'})
    res.end("Page Not Found");
}

});

server.listen(3005, ()=> console.log("server running"));