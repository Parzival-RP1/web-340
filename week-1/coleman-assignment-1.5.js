var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Assignment 1.5"));
console.log("\n");

/* ============================================ 
; Title: Assignment 1.5
; Author: Richard Krasso 
; Date: 25 Februrary 2018
; Modified By: Daniel Coleman
; Description: Node.js Server test within browser
;=========================================== */


var http = require("http");

function processRequest(req, res) {

    var body = "Hello World! I just saw this movie called Annihilation - It was really good, trippy but good! Go watch it!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);