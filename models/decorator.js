const Decorator = function () {
    this.stock = [];       // An array of (cans of) paint - empty at beginning
}


Decorator.prototype.stockCount = function () {
    return this.stock.length;
}


Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}



module.exports = Decorator;