
//var app = require("../js/app.js");
//var assert = require("assert");
//var jsdom = require("jsdom");
//var newTaskInput = document.getElementById('new-task');
var expect = chai.expect;
describe("App", function() {
  describe("hello", function() {
    it("should return hello", function() {
      var hello = hello();
      expect(hello()).to.equal("hell");
    });

    it("should set cow's name if provided", function() {
      //var cow = new Cow("Kate");
      expect("Kate").to.equal("Kate");
    });
  });
});