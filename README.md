# grunt-cache-manage

[![npm version](https://badge.fury.io/js/grunt-cache-manage.svg)](http://badge.fury.io/js/grunt-cache-manage)
[![Build Status](https://travis-ci.org/rou/grunt-cache-manage.svg?branch=master)](https://travis-ci.org/rou/grunt-cache-manage)

> Generate a file which manages file's versions.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cache-manage --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cache-manage');
```

## The "cache_manage" task

### Overview
In your project's Gruntfile, add a section named `cache_manage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cache_manage: {
    main: {
      options: {
        algorithm: 'md5',
        encoding: 'utf8'
      },
      files: {
        'samplemainjs': 'sample-main.js'
      },
      template: 'sample-mustache-template.txt',   // mustache template file.
      dest: 'sample-dest.txt'                     // output file.
    }
  }
});
```

### Options

#### options.algorithm
Type: `String`
Default value: `'md5'`


#### options.encoding
Type: `String`
Default value: `'utf8'`


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  cache_manage: {
    options: {},
    files: {
      'key_name': 'path/to/file',
    },
    template: 'path/to/template/file',
    dest: 'path/to/dest/file'
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  cache_manage: {
    options: {
      algorithm: 'sha1',
      encoding: 'utf16le',
    },
    files: {
     'key_name': 'path/to/file',
    },
    template: 'path/to/template/file',
    dest: 'path/to/dest/file'
  }
});
```

## Release History
* 2014-10-30      v0.1.0     First release.
