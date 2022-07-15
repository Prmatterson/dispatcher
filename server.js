// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var data = require('./data.js');
var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();
app.use(cors());
app.use(express.static('public')); //e.g localhost:8000/css/main.css
// app.use('/static', express.static(path.join(__dirname, 'public'))); // e.g localhost:8000/static/css/main.css
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => { // => http://localhost:8000/
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home', {author: "Peter M.", pageTitle: "Dispatcher", timeTable: data.timeTable, timeTableHeader: data.timeTableheader});
});


var server = app.listen(8000, function () { // server hosted in => http://localhost:8000
    console.log('listening to port 8000')
});
