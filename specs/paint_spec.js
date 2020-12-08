
// Use 'npm test' in terminal to run this file...as we have updated package.json to run this file as the test (hence 'npm test')

const assert = require('assert');
const Paint = require('../models/paint.js'); 

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Paint', function () {

    let paint;

    // This function will run before each 'it' function...
    beforeEach(function() {
        paint = new Paint(5);
    });


    // These are names for the tests:
    // xit("should have an area", function() {
    it("should have a number of litres", function() {
        // Arrange
        // Already done above with 'let room' and the beforeEach() function.

        // Act
        const actual_quantity = paint.quantity;

        // Assert
        assert.strictEqual(actual_quantity, 5)    // (actual, expected)
    });


})