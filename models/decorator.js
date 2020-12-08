const Decorator = function () {
    this.stock = [];       // An array of (cans of) paint - empty at beginning
}


Decorator.prototype.stockCount = function () {
    return this.stock.length;
}


Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}


Decorator.prototype.totalVolumePaint = function () {

    let totalVolume = 0;

    // Total up the volume of paint that decorator has
    for (let currentPaint of this.stock) {
        totalVolume += currentPaint.quantity;
    }

    return totalVolume;
}






module.exports = Decorator;