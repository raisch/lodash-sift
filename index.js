/* Created by raisch on 4/21/15. */

/*jshint node:true, bitwise:true, camelcase:false, curly:true, undef:false, unused:false, eqeqeq:true, shadow:true */

'use strict';

var _ = require('lodash').runInContext();

/**
 * Returns a new object composed of specified paths.
 * @param {object} data - object from which to extract values at paths
 * @param {string|array<string>} paths - path or list of paths to extract
 * @param {string} [delim='.'] - used to split paths
 * @returns {object}
 *
 * @example
 *
 *   var data={ a: { b: { c: 1, d: 2 }, e: { f: 3, g: 4 } }, h: 5 },
 *       paths=['a.b.c','a.e.g','h'];
 *
 *   sift(data,paths) => { a: { b: { c: 1 }, e: { g: 4 } }, h: 5 }
 */
var sift = function (obj, paths, delim) {

  if (!_.isObject(obj)) {
    throw new Error('requires an object');
  }

  paths = _.isArray(paths) ? paths : [paths];
  if (!_.isArray(paths)) {
    throw new Error('requires a path or array of paths');
  }

  delim = delim || '.';

  return _.map(paths, function (path) {
    var result = {},
        curr_result = result,
        curr_obj = obj;

    _.map(path.split(delim), function (part) {
      if (part.match(/^(\w+?)\[(\d+)\]$/)) {
        var key = RegExp.$1, i = RegExp.$2;
        if (_.isArray(curr_obj[key])) {
          curr_obj = curr_obj[key];
        }
        curr_result[key] = curr_obj[i];
      }
      else {
        curr_obj = curr_obj[part];
        curr_result[part] = _.isObject(curr_obj) ? {} : curr_obj;
        curr_result = curr_result[part];
      }
    });
    return result;
  }).reduce(_.merge);
};

_.mixin({sift: sift});

module.exports = _;
