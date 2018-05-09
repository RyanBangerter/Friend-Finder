//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var bodyParser = require("body-parser");
var path = require ('path');

// tells app that it is express
var app = express();

// sets up the port
var PORT = process.env.PORT || 8080;

//for data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Into Routing File
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//start server code
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
