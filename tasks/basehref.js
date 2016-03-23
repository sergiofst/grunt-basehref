/*
 * grunt-basehref
 * https://github.com/sergioserrano/grunt-basehref
 *
 * Copyright (c) 2016 Sergio Serrano
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.file.defaultEncoding = 'utf8';

  grunt.registerMultiTask('basehref', 'Update href from base html tag', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      href: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      // var src = f.src.filter(function(filepath) {
      //   // Warn on and remove invalid source files (if nonull was set).
      //   if (!grunt.file.exists(filepath)) {
      //     grunt.log.warn('Source file "' + filepath + '" not found.');
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }).map(function(filepath) {
      //   // Read file source.
      //   return grunt.file.read(filepath);
      // });

      // if (!grunt.file.exists(f.src)) {
      //   grunt.log.warn('Source file "' + f.src + '" not found.');
      // } else {
        grunt.log.writeln('Loading "' + f.src[0] + '"');
        if(grunt.file.exists(f.src[0])) {
          var src = grunt.file.read(f.src[0]);
          var $ = cheerio.load(src);
          $('base').attr("href", options.href);
          grunt.file.write(f.dest,  $.html());
          grunt.log.writeln('File "' + f.dest + '" created.');
        } else {
          grunt.log.warn('Source file "' + f.src[0] + '" not found.');
        }

      // }


    });
  });

};
