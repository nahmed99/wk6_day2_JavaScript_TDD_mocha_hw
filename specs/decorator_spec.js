
// Use 'npm test' in terminal to run this file...as we have updated package.json to run this file as the test (hence 'npm test')

const assert = require('assert');
const Decorator = require('../models/decorator.js'); 
const Paint = require('../models/paint.js'); 
const Room = require('../models/room.js'); 

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Decorator', function () {

    let decorator;

    // This function will run before each 'it' function...
    beforeEach(function() {
        decorator = new Decorator();
    });


    // These are names for the tests:
    // xit("should have a number of litres", function() {
    it("should start with an empty paint stock - property check", function() {
        // Arrange
        // Already done above with 'let decorator' and the beforeEach() function.

        // Act
        const actual_stock = decorator.stock.length;

        // Assert
        assert.strictEqual(actual_stock, 0)    // (actual, expected)
    });


    it("should start with an empty paint stock - function call", function() {
        // Arrange
        // Already done above with 'let decorator' and the beforeEach() function.

        // Act
        const actual_stock = decorator.stockCount();

        // Assert
        assert.strictEqual(actual_stock, 0)    // (actual, expected)
    });


    it("should be able to add a can of paint to paint stock", function() {
        // Arrange
        const paint = new Paint(5);

        // Act
        decorator.addPaint(paint);
        const actual_stock = decorator.stockCount();

        // Assert
        assert.strictEqual(actual_stock, 1)    // (actual, expected)
    });



    it("should be able to calculate total litres paint in stock", function() {
        // Arrange
        const paint1 = new Paint(5);
        const paint2 = new Paint(5);
        const paint3 = new Paint(2.5);

        // Act
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        const actual_stock = decorator.totalVolumePaint();

        // Assert
        assert.strictEqual(actual_stock, 12.5)    // (actual, expected)
    });



    it("should be able to calculate whether enough paint to paint room - false", function() {
        // Arrange
        const paint1 = new Paint(5);
        const paint2 = new Paint(5);
        const paint3 = new Paint(2.5);

        const room = new Room(25);

        // Act
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        const actual_isEnough = decorator.enoughPaint(room);

        // Assert
        assert.strictEqual(actual_isEnough, false)    // (actual, expected)
    });



    it("should be able to calculate whether enough paint to paint room - true", function() {
        // Arrange
        const paint1 = new Paint(10);
        const paint2 = new Paint(10);
        const paint3 = new Paint(10);

        const room = new Room(25);

        // Act
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        const actual_isEnough = decorator.enoughPaint(room);

        // Assert
        assert.strictEqual(actual_isEnough, true)    // (actual, expected)
    });


    it("should be able to paint room if enough paint in stock - false", function() {
        // Arrange
        const paint1 = new Paint(5);
        const paint2 = new Paint(5);
        const paint3 = new Paint(5);

        const room = new Room(25);

        // Act
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        decorator.paintRoom(room);
        const actual_isPainted = room.isPainted;

        // Assert
        assert.strictEqual(actual_isPainted, false)    // (actual, expected)
    });


    it("should be able to paint room if enough paint in stock - true", function() {
        // Arrange
        const paint1 = new Paint(10);
        const paint2 = new Paint(10);
        const paint3 = new Paint(10);

        const room = new Room(25);

        // Act
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        decorator.addPaint(paint3);
        decorator.paintRoom(room);
        const actual_isPainted = room.isPainted;

        // Assert
        assert.strictEqual(actual_isPainted, true)    // (actual, expected)
    });

})