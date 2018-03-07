/* ============================================ 
; Title: Exercise 2.3
; Author: Richard Krasso 
; Date: 6 March 2018
; Modified By: Daniel Coleman
; Description: Routes, intercepting path and re-routing
;=========================================== */


// require statements / library to start server
var express = require('express');
var http = require('http');

var app = express();

//route interceptors - to catch url messages and respond to client/user

app.get('/', function(req, res) {
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res) {
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res) {
    res.end('Welcome to the contact page.\n');
});

// app to catch bad requests and handle accordingly
app.use(function(req, res) {
    res.statusCode = 404;
    res.end('404!\n');
});

//create node server and verify application on specific X port
http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s', 3000)
});