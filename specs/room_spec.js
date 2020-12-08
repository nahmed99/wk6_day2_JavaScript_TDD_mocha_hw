
// Use 'npm test' in terminal to run this file...as we have updated package.json to run this file as the test (hence 'npm test')

const assert = require('assert');
const Room = require('../models/room.js'); 

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Room', function () {

    let room;

    // This function will run before each 'it' function...
    beforeEach(function() {
        room = new Room(2.5);
    });

    // These are names for the tests:
    // xit("should have an area", function() {
    it("should have an area", function() {
        // Arrange
        // Already done above with 'let room' and the beforeEach() function.

        // Act
        const actual_area = room.area;

        // Assert
        assert.strictEqual(actual_area, 2.5)    // (actual, expected)
    });

})