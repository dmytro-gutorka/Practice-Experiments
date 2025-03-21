"use strict";
function access(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAdnThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function printMessage(msg) {
    console.log(msg);
}
function doSomething(cb) {
    cb('message');
}
doSomething(printMessage);
//
// let user: User1 = {
//     name: 'Dima',
//     age: 10,
//     greet(){
//         console.log('Message')
//         return this.name
//     }
// }
let a;
