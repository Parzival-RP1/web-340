var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 1.3"));
console.log("\n");

/* ============================================ 
; Title: Exercise 1.3
; Author: Richard Krasso 
; Date: 25 Februrary 2018
; Modified By: Daniel Coleman
; Description: Node.js modules
;=========================================== */


//require statement for URL Library

var url = require('url');

// create a variable to hold a string URL value - parse to segragate pieces of that url
var parsedURL = url.parse('https://www.example.com/profile?name=coleman');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);