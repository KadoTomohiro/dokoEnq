(function() {
  'use strict';

  module.exports = {
    options: {
      // Task-specific options go here.
      basePath: '<%= paths.dist %>'
    },
    // Target-specific file lists and/or options go here.
    all: {
      dest: '<%= paths.dist %>/cache.appcache',
      cache: {
        patterns: [
          '<%= paths.dist %>/images/*.png',
          '<%= paths.dist %>/scripts/*.js',
          '<%= paths.dist %>/styles/*.css',
          '<%= paths.dist %>/**/*.html',
          '<%= paths.dist %>/*.ico',
          '<%= paths.dist %>/*.png'
        ],
      },
      network: '*'
    }
  };
})();
