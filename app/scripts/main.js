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
      'dokoEnq.directive.enquetetitle'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'},
<<<<<<< HEAD
    {path: '/personal', component: 'personal'}
=======
    {path: '/description', component: 'description'}
>>>>>>> b1c198909a0911a01f0e47798e2bcae017ac46d5
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
