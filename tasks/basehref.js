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

  grunt.registerMultiTask('basehref', 'Update href from base html tag', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var base_href = this.href;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      console.log("base_href: " + base_href);
      console.log("src: " + src);

      var $ = cheerio.load(src);
      $('base').attr("href",base_href);

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
