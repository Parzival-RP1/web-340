var header = require('../../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 3.3"));
console.log("\n");

/* ============================================ 
; Title: Exercise 3.3
; Author: Richard Krasso 
; Date: 7 March 2018
; Modified By: Daniel Coleman
; Description: Advanced Routing
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
app.use(logger("dev"));

app.get("/:productId", function(req, res) {
    var productId = parseInt(req.params.productId, 10);

    res.render("index", {
        productId: productId
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port %s", 8080);
});