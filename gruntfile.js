module.exports = function(grunt) {
  
  // Load grunt tasks
  require("load-grunt-tasks")(grunt);

  // Configuration for tasks goes here.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    
    sass: {
      options: {
        sourceMap: false,
        outputStyle: "expanded"
      },
      
      grid: {
        files: [{
          expand: true,
          cwd: "sass",
          src: ["*.scss", "**/*.scss"],
          dest: "css",
          ext: ".css",
          extDot: "last"
        }]
      }
    },
    
    watch: {
      sass: {
        files: ["sass/*.scss", "sass/**/"],
        tasks: ["sass:grid", "notify:complete"],
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
          message: "Compiled successfully"
        },
      }
    }
  });
  
  // Where we tell Grunt what to do when we type "grunt ***" into the terminal.
  grunt.registerTask("build", [
    "sass:grid",
    "notify"
  ]);

};