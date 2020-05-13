const express = require('express');
const app = express();
const middleWare = require('./Middlewares/errorHandler');
const appMiddleware = require('./Middlewares/appmiddleware');
const Routes = require("./routes/index");

app.set("view engine", "hbs");
app.set("views", __dirname+"/views");

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(appMiddleware.logger);

app.get('/', Routes);

app.use(middleWare.handleError);
app.use(middleWare.notFound);

app.listen('3000', () => console.log("server running at port 3000"));