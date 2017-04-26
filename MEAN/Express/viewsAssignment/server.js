var express = require("express");
var app = express();
app.get('/', function(request, response){
  var users_array = [
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  response.render('users', {users: users_array});
})
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.listen(8000, function(){
  console.log('listening on port 8000');
})
