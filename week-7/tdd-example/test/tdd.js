/*===========================
 Title: Exercise 7.2
 Author: Richard Krasso
 Date: 4 20 2018
 Modified By: Daniel Coleman
 Description: TDD in Action
 */==========================

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function(done) {

        assert(Array.isArray('Apple,Banana,Pineapple'.split(',')));
        done();
    });

});