"use strict";
function getArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 2 ** 2;
        case "square":
            return 4 * 4;
        case "triangle":
            return (3 * 4) / 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
getArea('f');
