/*
 Title: Exercise 4.3
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: HTTP Status Codes
 */


//start code
var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "404 not found"

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Everything Here has loaded perfectly!"

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Oh no! You've earned yourself a 501 Error!"

    })

});

http.createServer(app).listen(8080, function() {

   console.log("Application initiated on port 8080");

});

//end code