const Paint = function (quantity) {
    this.quantity = quantity;       //Number of litres of paint
}

Taxi.prototype.numberOfPassengers = function () {
    return this.passengers.length;
}

Taxi.prototype.addPassenger = function (passenger) {
    this.passengers.push(passenger);
}

Taxi.prototype.removePassengerByName = function (passenger) {
    const indexOfPassenger = this.passengers.indexOf(passenger);
    this.passengers.splice(indexOfPassenger, 1);
}

Taxi.prototype.removeAllPassengers = function () {
    this.passengers.splice(0, this.numberOfPassengers());
}

module.exports = Paint;