/* ============================================ 
; Title: Assignment 2.4
; Author: Richard Krasso 
; Date: 6 March 2018
; Modified By: Daniel Coleman
; Description: The EJS View engine & express
;=========================================== */

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

//specifying the folders name and base directory path
app.set("views", path.resolve(__dirname, "views"));
// express will know to use the ejs viewer
app.set("view engine", "ejs");

//Passing values to an EJS page requires the Response object and defining your own values
app.get("/", function(req, res) {
    res.render("index.ejs", {
        firstName: "Daniel",
        lastName: "Coleman",
        address: "4032 N Cadillac Dr #12 Fayetteville, Arkansas",
    });
});

//create server and specify local host listening on X port
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});