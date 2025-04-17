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
let names = ['dima', 21];
let obj = {
    name: 'Dima',
    age: 24,
};
function merge(a, b) {
    return [a, b];
}
merge(1, 'ff');
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
mergeObj({ name: 'dima' }, { name: 'dima2' });
class User {
    constructor(id) {
        this.id = id;
    }
}
const user = new User('');
