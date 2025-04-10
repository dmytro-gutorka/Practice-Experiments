"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
exports.getProperty = getProperty;
function getProperty(obj, key) {
    return obj[key];
}
class Queue {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.shift();
    }
    getValue() {
        return [...this.items];
    }
}
exports.Queue = Queue;
