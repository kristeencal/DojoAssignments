
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// use bodyParser to accept the values given in the form
app.use(bodyParser());
app.use(app.router);

// list of routes
app.get("/", function(req, res){
  res.send("This is from / GET req");
});

http.createServer(app).listen(8000);
