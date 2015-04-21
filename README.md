# lodash-sift
Returns a new object constructed using paths into an existing object.

### Description

Given a data object and a set of one or more dot-separated paths, `_.sift()` will return
a new object composed of only the values found at the selected paths.

### Example

```javascript
var _ = require('lodash-sift'), // returns lodash with sift mixin
    data = {
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
    },
    paths = [
      'a.b.d',
      'a.e.g',
      'h[2],
      'i[1].name'
    ];

_.sift(data, paths)
// => { a: { b: { d: 2 }, e: { g: 4 } }, h: 7, i: { name: 'bar' } }
```