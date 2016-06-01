module.exports = function (grunt) {
    
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     uglify: {
        options: {
            banner: '/*! jQuery Password Strength Indicator Plugin v0.1.0 | (c) Carlo van Wyk | https://www.humankode.com */\n'
         },
         build: {
             src: 'dist/jquery.passwordstrength.js',
             dest: 'dist/jquery.passwordstrength.min.js'
         }
     } 
  });
  
  //Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  //default task(s)
  grunt.registerTask('default', ['uglify']);
};