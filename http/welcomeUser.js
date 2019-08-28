const http = require('http');
const url = require('url');

let server = http.createServer();

server.on('request', function(req,res) {
    console.log(req.method, req.url);
    console.log("Headers : ",req.headers);
    let parsedURL = url.parse(req.url,true);
    console.log(parsedURL);

   if(parsedURL.pathname == '/' && parsedURL.query.name){
       res.writeHead(200, {'content-type':'text/plain'})
       res.end(`Welcome ${parsedURL.query.name}`);
   } 
    else {
        res.writeHead(404, {'content-type':'text/html'})
       res.end('page not found');
   }


});


server.listen(3005, ()=> console.log('server running on port 3005'));