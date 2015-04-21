# lodash-sift
Returns an object consisting of only the selected paths.

### Example

    var data={ a: { b: { c: 1, d: 2 }, e: { f: 3, g: 4 } }, h: [ 5, 6, 7 ] },
        paths=[ 'a.b.c', 'a.e.g', 'h.1' ];

    _.sift(data,paths) => { a: { b: { c: 1 }, e: { g: 4 } }, h: 6 }
