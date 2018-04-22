/*
 Title: Exercise 5.3
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: PUG Templates
 */

//start code
var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

//modify the message to your own custom message
    response.render("index", {

        message: "Hope you like Pugs!"

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//end code