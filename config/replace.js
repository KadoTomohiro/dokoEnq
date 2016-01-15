(function() {
  'use strict';

  module.exports = {
    dist: {
        options: {
          patterns: [
            {
              match: 'base href="/"',
              replacement: 'base href="http://kadotomohiro.github.io/dokoEnq/"'
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['dist/index.html'], dest: 'dist/'}
        ]
      }
  };
})();
