// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var data = require('./data.js');
var express = require('express');
var cors = require('cors');
var path = require('path');
// This library is used to transform from form payload (x-www-form-...) format to JSON 
// var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
// var urlencodedParser = bodyParser.urlencoded({ extended: false })  

var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json()); //USE JSON payloads by default
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static('public')); //e.g localhost:8000/css/main.css
// app.use('/static', express.static(path.join(__dirname, 'public'))); // e.g localhost:8000/static/css/main.css
// Set EJS as templating engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Defining Functions for Catching Errors in Modals
function addRepairOrder(res, orderPayload) {
    // By using urlencodedParser, the payload inside req is already a JSON object easier to read as follows req.body.whatever_field_you_are_passing
    if (orderPayload.workOrder == null || orderPayload.workOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number".`);
    } if (orderPayload.tech == null || orderPayload.tech == "") {
        res.status(400).send(`Error: missing "Technnician Number".`);
    } if (orderPayload.promiseTime == null || orderPayload.promiseTime == "") {
        res.status(400).send(`Error: missing "Promise Time"`);
    } if (orderPayload.duration == null || orderPayload.duration == "") {
        res.status(400).send(`Error: missing "Duration"`);
    } if (orderPayload.jobDescription == null || orderPayload.jobDescription == "") {
        res.status(400).send(`Error: missing "Job Description"`);
    }
    res.status(200).send("Success.");
}

function editRepairOrder(res, orderPayload) {
    if (orderPayload.editWorkOrder == null || orderPayload.editWorkOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number."`);
    }
    res.status(200).send("Success.");
}

function deleteRepairOrder(res, orderPayload) {
    if (orderPayload.deleteWorkOrder == null || orderPayload.deleteWorkOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number."`);
    }
    res.status(200).send("Success.");
}

function addJobRepairOrder(res, orderPayload) {
    if (orderPayload.addJobWorkOrder == null || orderPayload.addJobWorkOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number."`);
    } if (orderPayload.addJobDuration == null || orderPayload.addJobDuration == "") {
        res.status(400).send(`Error: missing "Duration"`);
    } if (orderPayload.addJobJobDescription == null || orderPayload.addJobJobDescription == "") {
        res.status(400).send(`Error: missing "Job Description"`);
    }
    res.status(200).send("Success.");
}

function addTimeToRepairOrder(res, orderPayload) {
    if (orderPayload.addTimeToWorkOrder == null || orderPayload.addTimeToWorkOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number."`);
    } if (orderPayload.addTimeDuration == null || orderPayload.addTimeDuration == "") {
        res.status(400).send(`Error: missing "Duration"`);
    } if (orderPayload.addTimeRoNote == null || orderPayload.addTimeRoNote == "") {
        res.status(400).send(`Error: missing "Note"`);
    }
    res.status(200).send("Success.");
}

function changeTimeOfRepairOrder(res, orderPayload) {
    if (orderPayload.changeTimeWorkOrder == null || orderPayload.changeTimeWorkOrder == "") {
        res.status(400).send(`Error: missing "Repair Order Number."`);
    } if (orderPayload.changePromiseTime == null || orderPayload.changePromiseTime == "") {
        res.status(400).send(`Error: missing "Promise Time"`);
    }
    res.status(200).send("Success.");
}

// How to Get Subpages from the Main Page (i.e. activating Navbar links)

app.get('/', (req, res) => { // => http://localhost:8000/
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home', { author: "Peter M.", pageTitle: "Dispatcher", timeTable: data.timeTable, timeTableHeader: data.timeTableheader });
});

app.get('/about', (req, res) => { // => http://localhost:8000/
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('about', { author: "Peter M.", pageTitle: "Dispatcher" });
});

// app.post('/add_repair_order', urlencodedParser, function (req, res) {  
//     response = addRepairOrder(req.body);
//     res.end(JSON.stringify(response));  
//  });  


// Modal Functions

app.post('/add_repair_order', function (req, res) {
    console.log("Triggering: ", '/add_repair_order', req.body, req.query);
    addRepairOrder(res, req.body);
});

app.post('/edit_repair_order', function (req, res) {
    console.log("Triggering: ", '/edit_repair_order', req.body, req.query);
    editRepairOrder(res, req.body);
});

app.post('/delete_repair_order', function (req, res) {
    console.log("Triggering: ", '/delete_repair_order', req.body, req.query);
    deleteRepairOrder(res, req.body);
});

app.post('/add_job_repair_order', function (req, res) {
    console.log("Triggering: ", '/add_job_repair_order', req.body, req.query);
    addJobRepairOrder(res, req.body);
});

app.post('/add_time_repair_order', function (req, res) {
    console.log("Triggering: ", '/add_time_repair_order', req.body, req.query);
    addTimeToRepairOrder(res, req.body);
});


app.post('/change_promise_time_repair_order', function (req, res) {
    console.log("Triggering: ", '/change_promise_time_repair_order', req.body, req.query);
    changeTimeOfRepairOrder(res, req.body);
});

var server = app.listen(8000, function () { // server hosted in => http://localhost:8000
    console.log('listening to port 8000')
});
