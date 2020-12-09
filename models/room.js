const Room = function (area) {
    this.area = area;
    this.isPainted = false;
}

// I am only going to allow the room to be not painted at all, or is completed painted.
Room.prototype.paint = function () {
    this.isPainted = !this.isPainted;
    return this.isPainted;
}

module.exports = Room;