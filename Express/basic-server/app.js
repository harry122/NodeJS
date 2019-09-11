const express = require('express');
const fs = require('fs');
const app = express();              // creating instant of express


// meddileware to read body data. // format the data and add it to the req object.
app.use(express.json());
app.use(express.urlencoded({extended :true}));          

// app level middleware
function logger(req,res,next) {
    console.log(req.method,req.url);
    next();
   // next(new Error("Not Authenicated"));             // this next will find a handler with four parameters.         
}

app.use(logger);

function routeMiddleWare(req,res,next){
    console.log("this is root route");
    next();
};

app.get('/', routeMiddleWare, function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/contact', function(req,res){
    res.sendFile(__dirname+"/views/contact.html");
});


app.post('/contact', function(req,res){
    let data = req.body;
    console.log(data);
//   console.log(data.name);
    res.status(200).write("Thanks for contacting: "+data.name);
    res.end();
});

app.put('/test-put', function(req,res) {
    console.log(req.body);
    res.send("Patch Working Fine");
});

app.patch('/test-patch', function(req,res) {
    console.log(req.body);
    res.send("Patch Working Fine");
});

app.patch('/test-delete', function(req,res) {
    res.send("Delete Working Fine");
});


// dynamic route

app.get('/products/all', function(req,res) {
    res.send("ALl product");
});

app.get('/products/:product', function(req,res) {
    console.log(req.params);

    let product = req.params.product;

    console.log(product);
    res.send("Hello");
});

app.get('/user-profile', function(req,res) {
    res.send('hello user');
});

app.use(function(req,res) {
    res.status(404).send("Page Not Found");
});

// use to hand appliaction level error
app.use(function(err,req,res,next) {
    console.log(err);
    res.status(500).send("Something went wrong");
});

app.listen(3005, ()=> console.log("Server running at port 3005"));