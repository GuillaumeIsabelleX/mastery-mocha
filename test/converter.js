var expect    = require("chai").expect;
var converter = require("../app/converter");


describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var x = 0;
      var y = 0;
      var z = x / y; //@test Expecting to crash the test
      expect(x,"Not good value").to.equal(2);
    });
  });

  
});