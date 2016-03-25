'use strict';
var twoMap = require('./index.js');

// test 1
var object = {
    "key1": 1,
    "key2": 2,
    "key3": 3
};
console.log(twoMap(object, 'key1'));
console.log(twoMap(object, 1));
console.log(twoMap(object, '1'));



var object = {
    1: 'key1',
    2: 'key2',
    3: 'key3'
};
console.log(typeof twoMap(object, 'key1'));
console.log(twoMap(object, 1));
console.log(twoMap(object, '1'));