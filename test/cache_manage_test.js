'use strict';

var grunt = require('grunt');

exports.cache_manage = {
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/sample.conf');
    var expected = grunt.file.read('test/expected/sample.conf');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
