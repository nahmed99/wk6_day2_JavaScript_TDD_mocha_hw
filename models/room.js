const Room = function (area, isPainted=false) {
    this.area = area;
    this.isPainted = isPainted;
}

// I am only going to allow the room to be not painted at all, or is completed painted.
Room.prototype.paint = function () {
    this.isPainted = !this.isPainted;
    return this.isPainted;
}

module.exports = Room;