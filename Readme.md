twoWayMap
=====
Object get value by key, or get key by value.

## Install
```
$ npm install two-way-map
```


## How to use

```js
var mapper = {
    "regist": 1,
    "login": 2,
    "update": 3
};
var twoMap = require('two-way-map');

twoMap(mapper, regist)   // 1
twoMap(mapper, 1)        // regist
```

Notice: when try to get key by value, use === test.