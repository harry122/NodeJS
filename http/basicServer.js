// apache is web server
// server is a machine only where we have (application + web server).

const http = require('http');
const url = require('url');

let server = http.createServer(function(req, res) {
    // console.log(req);
    console.log(req.method,req.url);

    if(req.url == '/'){
        res.end('Welcome to home Page');
    } else if(req.url == '/about'){
        res.end('This is about page');
    }else {
        res.end('page not found');
    }

    // console.log(req.method, req.url);
    // res.end('server is working fine');
});


server.listen(3000, (err) => { 
    
    if(err) console.log(err);
    console.log('server is up n running')
});

