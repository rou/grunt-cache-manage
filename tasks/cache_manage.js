/*
 * grunt-cache-manage
 * https://github.com/rou/grunt-cache-manage
 *
 * Copyright (c) 2014 "rou" Seitaro Makabe
 * Licensed under the MIT license.
 */

'use strict';

const mu = require('mu2');
const crypto = require('crypto');
const fs = require('fs');
const async = require('async');

function hash(path, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  const algorithm = options.algorithm || 'md5';
  const encoding = options.encoding || 'utf8';

  fs.readFile(path, function(error, data) {
    if (error) {
      return callback(error);
    }
    const hash = crypto.createHash(algorithm);
    hash.update(data, encoding);

    callback(null, hash.digest('hex'));
  });
}

function compile(options, callback) {
  mu.compileAndRender(options.template, options.values)
    .on('data', function(data) {
      fs.appendFileSync(options.dest, data.toString(), {});
    })
    .on('end', callback);
}

module.exports = function(grunt) {
  grunt.registerMultiTask('cache_manage', 'Generate a file which manages file\'s versions.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    const options = this.options({
      algorithm: 'md5',
      encoding: 'utf8'
    });

    const files = this.data.files;
    const template = this.data.template;
    const dest = this.data.dest;
    const done = this.async();
    const values = {};
    async.each(Object.keys(files), function(key, callback) {
      const file = files[key];
      hash(file, options, function(error, data) {
        if (error) {
          throw new Error('failed hashing. (' + error.toString() + ')');
        }
        values[key] = data;
        callback();
      });
    }, function() {
      compile({
        template: template,
        values: values,
        dest: dest
      }, done);
    });
  });
};
