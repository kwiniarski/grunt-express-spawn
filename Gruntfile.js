/*
 * grunt-express-spawn
 * https://github.com/kwiniarski/grunt-express-spawn
 *
 * Copyright (c) 2014 Krzysztof Winiarski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      servers: {
        files: 'test/fixtures/*.js',
        tasks: ['express']
      }
    },

    // Configuration to be run (and then tested).
    express: {
      options: {
        stdout: true
      },
      defaults: {
        script: 'test/fixtures/serverOne',
        options: {
        }
      },
      custom: {
        script: 'test/fixtures/serverTwo',
        options: {
          env: {
            NODE_ENV: 'stageing'
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('run', ['express', 'watch']);
  grunt.registerTask('test', ['express', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
