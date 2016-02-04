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
      'dokoEnq.service.firebase',
      'dokoEnq.service.auth'
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

  AppController.$inject = ['$rootScope', '$location', '$window', 'OnlineStatusService', 'firebaseService'];

  /**
   * AppController
   *
   * @class AppController
   * @main dokoEnq
   * @constructor
   */
  function AppController ($rootScope, $location, $window, OnlineStatusService, firebaseService) {
    console.log('AppController construction');
    this.fb = firebaseService;
    this.$location = $location;
    this.onlineStatus = OnlineStatusService;
    vm = this;

    // firebaseで認証されたら認証状態を保存する
    // localStrageへの保存を検討する
    this.fb.auth.$onAuth(function(authData) {
      vm.fb.authData = authData;
    });

    // オンライン状態
    vm.isOnline = vm.onlineStatus.isOnline;

    $window.addEventListener('updateready', function () {
      if ($window.applicationCache.status === $window.applicationCache.UPDATEREADY) {
        window.applicationCache.swapCache();
        window.location.reload();
      }
    }, false);
  }

  AppController.prototype.signOut = function () {
     vm.fb.auth.$unauth();
   };

  var vm;
})();
