var expect = require("chai").expect;
var converter = require("../app/converter");


describe("Dummy Test", function () {
  describe("Just dummy expectations", function () {
    it("Just check a variable", function () {
      var x = 0;
      var y = 0;

      expect(x, "Not good value").to.equal(0);
    });

    it('Read an ENV Var and check its value', () => {

      require('dotenv').config();
      var tstVar = process.env.MYVAR;
      console.log(tstVar);

      expect(tstVar, "Invalid environment variable").to.equal('2');
    });
  });


});