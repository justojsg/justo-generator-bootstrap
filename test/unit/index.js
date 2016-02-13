//imports
const suite = require("justo").suite;
const test = require("justo").test;
const api = require("../../dist/es5/nodejs/justo-generator-bootstrap");

//suite
suite("index", function() {
  test("API", function() {
    api.default.must.be.instanceOf(Function);
    api.add.must.be.instanceOf(Function);
  });
})();
