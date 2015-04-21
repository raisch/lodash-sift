# lodash-sift

A lodash "mixin" that returns a new object constructed using supplied paths into an
existing object.

[![npm version](https://badge.fury.io/js/lodash-sift.svg)](http://badge.fury.io/js/lodash-sift)
[![Build Status](https://travis-ci.org/raisch/lodash-sift.svg?branch=master)](https://travis-ci.org/raisch/lodash-sift)
[![Dependencies Status](https://david-dm.org/raisch/lodash-sift.svg)](https://david-dm.org/raisch/lodash-sift)
[![DevDependencies Status](https://david-dm.org/raisch/lodash-sift/dev-status.svg)](https://david-dm.org/raisch/lodash-sift#info=devDependencies)

### Description

Given a data object and a set of one or more dot-separated paths, `_.sift()` will
construct and return a new object composed of only the values found at the selected
paths.

### Example

```javascript
var _ = require('lodash-sift'); // returns lodash with sift mixin

var data = { // object from which to extract paths
      a: {
        b: {
          c: 1,
          d: 2
        },
        e: {
          f: 3,
          g: 4
        }
      },
      h: [5, 6, 7],
      i: [{name: 'foo'}, {name: 'bar'}]
    };
    
var paths = [ // paths to extract from data
      'a.b.d',
      'a.e.g',
      'h[2],
      'i[1].name'
    ];

_.sift(data, paths)

// => { a: { b: { d: 2 }, e: { g: 4 } }, h: 7, i: { name: 'bar' } }
```

All paths must be terminal (they must end up at a non-object.)

If a path is non-terminal, it will result in an undefined value in
the result, as in:

```javascript

var data={a:{b:{c:1}}};

_.sift(data,'a.b') // => { a: { b: undefined } }
```

If a path does not exist, it will be undefined in the result, as in:

```javascript

var data={ a: { b: { c: 1 } } };

_.sift(data,'a.b.foo') // => { a: { b: { foo: undefined } } }
```
