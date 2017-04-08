var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// var route = require("./routes/index.js")(app)

app.get('/', function(req, res) {
 res.render("index");
})

app.post("/result", function(req, res)
{
    var submitted_info = {
      fullname: req.body.fullname
      // value: req.body.value
    }
    console.log(req.body);
    res.render("result", {user_data: submitted_info});
});
app.listen(3000, function() {
 console.log("listening on port 3000");
});
