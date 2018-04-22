/*
 Title: Exercise 5.2
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: EJS Templates
 */


//start code
var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

//replace the list of fruits with a list of names
var f = [

  "Jamie",

  "John",

  "William",

  "Tena"

];


app.get("/", function(request, response) {

    response.render("index", {

        friends: f

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application initiated on port 8080!");

});

//end code