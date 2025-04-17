"use strict";
// intersection
const fileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};
const dbSource = {
    type: 'db',
    connectionURL: 'some-connection-url',
};
function loadData(source) {
    if (source.type === 'file')
        return source.path;
    return source.connectionURL;
}
function getLength(val) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords}`;
    }
    return val.length;
}
const numberOfWords = getLength('does this work?');
const numItems = getLength(['Sports', 'Cookies']);
let store = {
    a: 'a',
    b: 'b'
};
store.c = 'c';
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
const pallete = {
    red: [1, 255, 4],
    green: '#3454',
    blue: [0, 333, 222]
};
const color = pallete.green.toUpperCase();
