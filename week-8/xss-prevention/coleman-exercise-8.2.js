/*
============================================
; Title:  Exercise 8.2
; Author: Professor Krasso 
; Date:   4 20 2018
; Modified By: Daniel Coleman
; Description: Cross-Site Scripting
;===========================================
*/ 

// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet")
var path = require("path");

// initialize express
var app = express();

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// http calls
app.get("/", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

// create/start Node server
http.createServer(app).listen(8080, function() {
    console.log("Application initiated on port 8080!");
});