/*
 Title: Exercise 4.2
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: JSON APIs
 */

//start code
var express = require("express");

var http = require("http");

var app = express();

app.get("/customer/:bestAnime", function (request, response) {

    var bestAnime = parseInt(request.params.bestAnime, Bleach);

    response.json({

        bestAnimeSeries: "Claymore",

        bestAnimeManga: "Naruto",

        bestAnime: bestAnime,

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

//end code