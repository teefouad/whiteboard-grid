var media = require('whiteboard-media');
var essentials = require('whiteboard-essentials');
var compass = require('compass-importer');

module.exports = function(grunt) {
  
  // Load grunt tasks
  require('load-grunt-tasks')(grunt);
  
  // Configuration for tasks goes here.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'expanded',
        importer: [media, essentials, compass]
      },
      
      grid: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss', '**/*.scss'],
          dest: 'css',
          ext: '.css',
          extDot: 'last'
        }]
      },
      
      demo: {
        files: [{
          expand: true,
          cwd: 'demo',
          src: ['*.scss'],
          dest: 'demo',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },
    
    watch: {
      grid: {
        files: ['sass/*.scss', 'sass/**/*.scss'],
        tasks: ['sass:grid', 'notify:complete'],
        options: {
          spawn: false
        }
      },
      
      demo: {
        files: ['demo/*.scss'],
        tasks: ['sass:demo', 'notify:complete'],
        options: {
          spawn: false
        }
      }
    },
    
    notify: {
      complete: {
        options: {
          enabled: true,
          success: true,
          duration: 1,
          message: 'Compiled successfully'
        },
      }
    }
  });
  
  // Where we tell Grunt what to do when we type 'grunt ***' into the terminal.
  grunt.registerTask('build', [
    'sass:grid',
    'notify'
  ]);

};