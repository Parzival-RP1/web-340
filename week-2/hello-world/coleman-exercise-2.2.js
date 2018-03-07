/* ============================================ 
; Title: Exercise 2.2
; Author: Richard Krasso 
; Date: 6 March 2018
; Modified By: Daniel Coleman
; Description: hello world with express / test server with cURL
;=========================================== */


// require statements / library to start server
var express = require('express');
var http = require('http');

//placeholder for express app
var app = express();

//
app.use(function(req, res) {
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

//create new server, and listen on a port. Notify that application has started and is listening on X port
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
})