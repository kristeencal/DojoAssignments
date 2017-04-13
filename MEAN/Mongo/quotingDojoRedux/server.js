// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/quotedb");
var QuoteSchema = mongoose.Schema({

  name: String,
  quote: String






}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// app.get('/quotes', function(req, res) {
//
// }
// Add User Request
// app.post('/quotes', function(req, res) {
//
//     // if (req.body.submit == "Add my quote!") {
//     //   var newQuote = new Quote({
//     //     name: req.body.user,
//     //     quote: req.body.content,
//     //     newQuote.save(function(err){
//     //       if (err) {
//     //         console.log('error', err);
//     //         res.redirect('/')
//     //       } else {
//             res.redirect('/quotes')
// //           }
// //         })
// //       })
// // }})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
