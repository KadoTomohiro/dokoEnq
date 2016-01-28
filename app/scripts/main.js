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
      'ngStorage',
      'firebase',
      'dokoEnq.config',
      'dokoEnq.components.home',
      'dokoEnq.components.description',
      'dokoEnq.components.personal',
      'dokoEnq.components.confirm',
      'dokoEnq.components.complete',
      'dokoEnq.components.store',
      'dokoEnq.components.signin',
      'dokoEnq.directive.enquetetitle',
      'dokoEnq.service.answer',
      'dokoEnq.service.store',
      'dokoEnq.service.onlinestatus',
      'dokoEnq.service.firebase'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/personal', component: 'personal'},
    {path: '/description', component: 'description'},
    {path: '/confirm', component: 'confirm'},
    {path: '/complete', component: 'complete'},
    {path: '/store', component: 'store'},
    {path: '/signin', component: 'signin'}
  ];

  AppController.$inject = ['$rootScope', '$location', 'OnlineStatusService', 'firebaseService'];

  /**
   * AppController
   *
   * @class AppController
   * @main dokoEnq
   * @constructor
   */
  function AppController ($rootScope, $location, OnlineStatusService, firebaseService) {
    console.log('AppController construction');
    this.fb = firebaseService;
    this.$location = $location;
    this.onlineStatus = OnlineStatusService;
    vm = this;

    this.fb.auth.$onAuth(function(authData) {
      vm.fb.authData = authData;
    });

    $rootScope.$watch(this.onlineStatus.isOnline, function(online) {
      console.log('online status is', online);
      vm.isOnline = vm.onlineStatus.isOnline();
    });
  }

  AppController.prototype.signOut = function () {
     vm.fb.auth.$unauth();
   };

  var vm;
})();
