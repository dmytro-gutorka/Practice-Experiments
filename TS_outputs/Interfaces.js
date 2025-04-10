"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilledFlexibleCircle = exports.Square = exports.Circle = void 0;
exports.sortShapes = sortShapes;
class Circle {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }
    calculateSquare() {
        return Math.PI * this.size ** 2;
    }
}
exports.Circle = Circle;
class Square {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }
    calculateSquare() {
        return this.size ** 2;
    }
}
exports.Square = Square;
function sortShapes(array) {
    return array
        .slice()
        .sort((a, b) => a.calculateSquare() - b.calculateSquare())
        .map(shape => shape.name);
}
class FilledFlexibleCircle {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }
    calculateSquare() {
        return Math.PI * this.size ** 2;
    }
    increaseSize(value) {
        this.size *= value;
    }
    decreaseSize(value) {
        this.size /= value;
    }
}
exports.FilledFlexibleCircle = FilledFlexibleCircle;
