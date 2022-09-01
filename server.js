const express = require('express');
const dotenv =require('dotenv');
const app = express();
const bodyparser= require('body-parser');
const path= require('path');
const connectDB = require('./server/database/connection')

dotenv.config({path:'config.env'});
const PORT=process.env.PORT||8080;

//mongodb connection
connectDB();

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyparser.urlencoded({ extended: true }));

//connecting html to node.js
app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
  )
app.use(
    "/js",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
  )

// load routers
app.use('/',require("./server/routes/routes"));

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})