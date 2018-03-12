var header = require('../../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 3.2"));
console.log("\n");

/* ============================================ 
; Title: Exercise 3.2
; Author: Richard Krasso 
; Date: 7 March 2018
; Modified By: Daniel Coleman
; Description: Node JS Logging
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
        message: "This is the BEST Morgan Logger Example!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port %s", 8080);
});