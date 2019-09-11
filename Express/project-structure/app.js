const express = require("express");
const hbs = require("hbs");
const errorHandler = require('./middlewares/errorHandler');
const appMiddlewares = require("./middlewares/appMiddleWare");
const routes = require("./routes/index")
const app = express();

app.set("views", __dirname+"/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

app.use(appMiddlewares.logger);
app.use(express.static(__dirname+"/static"));

app.get('/', routes.index);

app.get('/about', routes.about);

 app.get('/contact', routes.contact);

// Handle 404
app.use(errorHandler.pageNotFound);

// Handle Error
app.use(errorHandler.handleException);



app.listen(3000, () => console.log("Server running at port 3000"));
