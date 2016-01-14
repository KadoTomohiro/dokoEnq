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
      'dokoEnq.components.description',
      'dokoEnq.components.personal',
      'dokoEnq.directive.enquetetitle',
      'dokoEnq.components.confirm'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
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
