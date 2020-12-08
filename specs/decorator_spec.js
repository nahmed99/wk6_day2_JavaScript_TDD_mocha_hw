
// Use 'npm test' in terminal to run this file...as we have updated package.json to run this file as the test (hence 'npm test')

const assert = require('assert');
const Decorator = require('../models/decorator.js'); 

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Decorator', function () {

    let decorator;

    // This function will run before each 'it' function...
    beforeEach(function() {
        decorator = new Decorator();
    });


    // These are names for the tests:
    // xit("should have a number of litres", function() {
    it("should start with an empty paint stock", function() {
        // Arrange
        // Already done above with 'let decorator' and the beforeEach() function.

        // Act
        const actual_stock = decorator.stock.length;

        // Assert
        assert.strictEqual(actual_stock, 0)    // (actual, expected)
    });


})