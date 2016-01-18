(function() {
  'use strict';

  module.exports = {
    dist: {
        options: {
          patterns: [
            {
              match: '<base href="/">',
              replacement: '<base href="http://kadotomohiro.github.io/dokoEnq/">'
            }
          ],
           usePrefix: false
        },
        files: [
          {expand: true, flatten: true, src: ['<%= paths.dist %>/index.html'], dest: '<%= paths.dist %>/'}
        ]
      }
  };
})();
