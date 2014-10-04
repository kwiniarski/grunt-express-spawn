'use strict';

var grunt = require('grunt');

exports.express_spawn = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  defaults: function(test) {
    test.done();
  },
  custom: function(test) {
    test.done();
  }
};
