'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                force: true
            },
            all: [
                'Gruntfile.js',
                'lib/**/*.js'
            ]
        }
    });

    require('load-grunt-tasks')(grunt);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', [
        'jshint'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'jshint'
    ]);

};