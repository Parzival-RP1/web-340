/*
============================================
; Title:  Assignment 4.4
; Author: Professor Krasso 
; Date:   4 20 2018
; Modified By: Daniel Coleman
; Description: cURL
;===========================================
*/
var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.get("/", function(req, res) { //
    res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) {
    res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) {
    res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) {
    res.send("API invoked as an HTTP DELETE request");
});
// creates the server to listen on port 
http.createServer(app).listen(8080, function() {
    // logs output message on port 8080                                                
    console.log("Application initiated on port 8080.");
});