/*
 Title: Exercise 7.3
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: Mocha and Chai
 */

var fruits = require("../coleman-exercise-7.3");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Banana,Pineapple');

        assert(Array.isArray(f));

    });

});