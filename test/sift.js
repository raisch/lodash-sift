/* Created by raisch on 4/21/15. */

/*jshint node:true, bitwise:true, camelcase:false, curly:true, undef:false, unused:false, eqeqeq:true, shadow:true */

var assert=require('assert'),
    _=require('../index');

'use strict';

describe('lodash sift',function(){

  var data={};

  beforeEach(function(){
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
      i: [
        {name: 'foo'},
        {name: 'bar'}
      ]
    };
  });

  it('should get an empty object for a non-terminal path',function(){
    var actual= _.sift(data,'a'),
        expected={a:{}};
    assert(_.isEqual(actual,expected));
  });

  it('should get a single path',function(){
    var actual= _.sift(data,'a.b.c'),
        expected={ a: { b: { c: 1 } } };
    assert(_.isEqual(actual,expected));
  });

  it('should get two paths',function(){
    var actual= _.sift(data,['a.b.c','a.b.d']),
        expected={ a: { b: { c: 1, d: 2 } } };
    assert(_.isEqual(actual,expected));
  });

  it('should get an array terminal path',function(){
    var actual= _.sift(data,'h[0]'),
        expected={h:5};
    assert(_.isEqual(actual,expected));
  });

  it('should get a complex group of paths',function(){
    var actual= _.sift(data,['a.b.d','a.e.f','h[1]','i[1].name']),
        expected = { a: { b: { d: 2 }, e: { f: 3 } }, h: 6, i: { name: 'bar' } };
    assert(_.isEqual(actual,expected));
  });

  it('should not return a non-existant path',function(){
    var actual= _.sift(data,['z']),
        expected = { z: undefined };
    assert(_.isEqual(actual,expected));
  });

  it('should not return a non-existant sub-path',function(){
    var actual= _.sift(data,['a.b.name']),
        expected = { a: { b: { name: undefined } } };
    assert(_.isEqual(actual,expected));
  });

});



