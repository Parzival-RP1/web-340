var header = require('../../header.js');
console.log(header.display("Daniel", "Coleman", "Assignment 3.4"));
console.log("\n");

/* ============================================ 
; Title: Assignment 3.4
; Author: Richard Krasso 
; Date: 7 March 2018
; Modified By: Daniel Coleman
; Description: Putting it all together
============================================= */

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//assign express to variable
var app = express();

//determines which directory to look for the EJS files in
app.set("views", path.resolve(__dirname, "views"));
//tell express to use the ejs view engine
app.set("view engine", "ejs");
//add the loggers
app.use(logger("short"));

app.get("/", function(req, res) {
    res.render("index", {
        message: "home page"
    });
});


app.get("/", function(req, res) {
    res.render("about", {
        message: "about page"
    });
});


app.get("/", function(req, res) {
    res.render("contact", {
        message: "contact page"
    });
});


app.get("/", function(req, res) {
    res.render("products", {
        message: "products page"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
});