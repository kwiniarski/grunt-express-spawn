/*
* grunt-express-spawn
* https://github.com/kwiniarski/grunt-express-spawn
*
* Copyright (c) 2014 Krzysztof Winiarski
* Licensed under the MIT license.
*/

var path = require('path');
var chalk = require('chalk');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {
  'use strict';

  var instances = {};

  grunt.registerMultiTask('express', function () {

    var options = this.options({
      stderr: true,
      stdout: false,
      env: {}
    });

    var done = this.async();
    var config	= this.data;
    var script	= path.join(process.cwd(), config.script);
    var kill = process.platform === 'win32' ? 0 : 'SIGTERM';
    var instance = instances[script];

    function terminate(cb) {
      grunt.verbose.writeln(instance.name + 'Process killed (with signal ' + kill + ')');

      instance.kill(kill);
      delete instances[script];

      if (typeof cb === 'function') {
        cb();
      }
    }

    if (instance && instance.pid) {
      terminate();
    }

    instance = spawn('node', [script], {
      env: options.env
    });
    instance.name = '   [PID ' + instance.pid + '] ' + chalk.cyan(config.script) + ': ';

    instances[script] = instance;

    if (options.stderr) {
      instance.stderr.setEncoding('utf8');
      instance.stderr.on('data', function (data) {
        if (/^Error:/.test(data)) {
            grunt.fatal(instance.name + '\u000A' + data);
        }
      });
    }

    if (options.stdout) {
      instance.stdout.setEncoding('utf8');
      instance.stdout.on('data', function (data) {
        grunt.log.write(instance.name + chalk.grey(data));
      });
    }

    instance.on('close', function (code) {
      if (code === 0) {
        grunt.log.ok(instance.name.trim() + ' Server stopped.');
      } else {
        grunt.log.warn(instance.name.trim() + ' Server closed unexpectedly (exit code ' + code + ').');
      }

      terminate(done);
    });

    grunt.log.ok(instance.name.trim() + ' Server started.');

    done();
  });

};
