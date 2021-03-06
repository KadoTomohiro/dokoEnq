(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= paths.app %>',
        dest: '<%= paths.dist %>',
        src: [
          '*.{ico,png,txt}',
          'images/{,*/}*.*',
          'components/{,*/}*.html',
          'directives/{,*/}*.html',
          '{,*/}*.html',
          'styles/fonts/{,*/}*.*'
        ]
      }]
    },
    styles: {
      expand: true,
      dot: true,
      cwd: '<%= paths.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  };
})();
