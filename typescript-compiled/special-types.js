"use strict";
const inputEl = document.getElementById("input");
function process(val) {
    if (typeof val === 'object' && val && 'log' in val && typeof val.log === 'function') {
        val.log('ff');
    }
}
function process1(val) {
    val.log('ff');
}
const user1 = {
    name: 'Dima',
    age: 30,
};
const print1 = (msg) => console.log(msg);
print1();
let input = '';
