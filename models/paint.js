const Paint = function (quantity) {
    this.quantity = quantity;       //Number of litres of paint
}



Paint.prototype.emptyItself = function () {
    this.quantity = 0;
}


Paint.prototype.checkIfEmpty = function () {
    return this.quantity === 0;
}


module.exports = Paint;