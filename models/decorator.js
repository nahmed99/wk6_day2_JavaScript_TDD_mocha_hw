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
    for (const currentPaint of this.stock) {
        totalVolume += currentPaint.quantity;
    }

    return totalVolume;
}


Decorator.prototype.enoughPaint = function (room) {
    // Is there enough paint in stock to paint the room?
    return this.totalVolumePaint() >= room.area;
}


Decorator.prototype.paintRoom = function (room) {
    // Paint room if there is enough paint in stock to paint the room
    if (this.totalVolumePaint() >= room.area) {
        room.paint();
    }
}



module.exports = Decorator;