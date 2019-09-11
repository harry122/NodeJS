const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// setup view and view engine
app.set("views", __dirname+"/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

let products = [ { name: 'Mobile',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'Charger',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'HeadPhones',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'Ram',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'Watch',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'Mouse',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'football',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'Trouser',
price: 225,
rating: 4,
description: 'Good Product' },
{ name: 'T-shirts',
price: 225,
rating: 4,
description: 'Good Product' }, ];

function logger(req,res,next){
    console.log(req.method,req.url);
    next();
};

app.get("/", logger, (req,res) => {
    res.render("index", {
        name : "Joe",
        fullName : "<p>Harish Mehra</p>",
        product: {
            name : "Headphones",
            price : 1225,
            rating : 4.5
        },
        hobbies : ['football','Music','Travelling'],
        userName : "Harry",
        productList : products
    });
});

app.get("/contact", function(req,res) {
    res.render("contact");
})


app.listen(3000, ()=> console.log("Server running at port 3000"));




