/**
 * This is dokoEnq module.
 *
 * @module dokoEnq
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq', [
      'ngNewRouter',
      'dokoEnq.config',
      'dokoEnq.components.home',
      'dokoEnq.components.about',
      'dokoEnq.components.contact',
      'dokoEnq.directive.enquetetitle',
      'dokoEnq.components.description'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
    {path: '/description', component: 'description'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main dokoEnq
   * @constructor
   */
  function AppController () {}
})();
