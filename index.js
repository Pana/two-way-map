'use strict';
module.exports = function (object, key) {
    if (typeof object !== 'object' || typeof key === 'undefined') throw new Error('Parameter error !');
    if (object[key]) return object[key];
    for (var i in object) {
        if (object[i] === key) return i;
    }
}