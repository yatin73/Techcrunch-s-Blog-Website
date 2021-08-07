const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname +"public/css"));
app.use("/img", express.static(__dirname +"public/img"));


// Templating Engine
app.set("views" , "./src/views");
app.set("view engine" , "ejs");


app.use(bodyParser.urlencoded({extended: true}));


// Routes
const newsRouter = require("./src/routes/news");



app.use("/", newsRouter);
app.use("/article", newsRouter);










app.listen(process.env.PORT || 3000 , function(){
  console.log("server started");
});
