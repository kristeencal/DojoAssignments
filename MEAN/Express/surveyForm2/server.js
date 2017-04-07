var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
 res.render("index");
})

app.post("/form", function(req, res)
{
    var fullname = req.body.fullname;
    res.send("Post successful");
});
app.listen(8000, function() {
 console.log("listening on port 8000");
});
