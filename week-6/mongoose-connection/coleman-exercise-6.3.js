/*
 Title: Exercise 6.3
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: Mongoose
 */

//start code
var mongoose = require("mongoose");

var mongoDB = "mongodb://emsUser:*Amesip8@ds127899.mlab.com:27899/ems";


mongoose.connect(mongoDB, {


    useMongoClient: true


});


mongoose.Promise = global.Promise;


var db = mongoose.connection;


db.on("error", console.error.bind(console, "MongoDB connected error: "));


db.once("open", function () {


    console.log("Application connected to mLab MongoDB instance");


});