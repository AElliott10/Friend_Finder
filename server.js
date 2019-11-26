// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// create application/x-www-form-urlcoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({type:'application/*+json'}))

// parse some custom thing into a buffer
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))

// parse an HTML body into a string
app.use(bodyParser.text({type:'text/html'}))


//This code is referencing routes created in HTMLRoutes.js and apiRouting.js to allow HTML pages to display to client or allow data to flow between back and front end and vice versa
require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
