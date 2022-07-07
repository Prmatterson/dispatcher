// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => { // => http://localhost:8000/
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home', {author: "Peter M.", pageTitle: "Dispatcher"});
});



var server = app.listen(8000, function () { // server hosted in => http://localhost:8000
    console.log('listening to port 8000')
});