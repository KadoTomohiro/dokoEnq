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
      'dokoEnq.components.description',
      'dokoEnq.components.personal',
      'dokoEnq.directive.enquetetitle',
      'dokoEnq.components.confirm',
      'dokoEnq.service.answer'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/personal', component: 'personal'},
    {path: '/description', component: 'description'},
    {path: '/confirm', component: 'confirm'}
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
