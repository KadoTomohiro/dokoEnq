// Karma configuration
// Generated on Mon Apr 20 2015 20:03:02 GMT+0900 (JST)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha','chai','sinon'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-new-router/dist/router.es5.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/tether/dist/js/tether.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/firebase/firebase.js',
      'bower_components/angularfire/dist/angularfire.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      // injector:js
      'app/components/about/about.js',
      'app/components/complete/complete.js',
      'app/components/confirm/confirm.js',
      'app/components/contact/contact.js',
      'app/components/description/description.js',
      'app/components/home/home.js',
      'app/components/personal/personal.js',
      'app/directives/enquetetitle/enquetetitle.js',
      'app/scripts/config.js',
      'app/service/answer/answer.js',
      'app/service/store/store.js',
      'test/components/about/about.spec.js',
      'test/components/complete/complete.spec.js',
      'test/components/confirm/confirm.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/description/description.spec.js',
      'test/components/home/home.spec.js',
      'test/components/personal/personal.spec.js',
      'test/directives/enquetetitle/enquetetitle.spec.js',
      'test/main.spec.js',
      'test/service/answer/answer.mock.js',
      'test/service/answer/answer.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      'test/service/store/store.mock.js',
      'test/service/store/store.spec.js',
      // endinjector
      'app/scripts/main.js',
      'test/main.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'report',
      subdir: 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
