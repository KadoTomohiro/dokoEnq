// jshint devel:true
(function () {
  'use strict';

  angular
    .module('dokoEnq.config', [])
    .config(AppConfig);

  function AppConfig($locationProvider, $routeProvider) {
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);

    console.log('$routeProvider:', $routeProvider);
  }

  AppConfig.$inject = ['$locationProvider', '$routeProvider'];
})();
