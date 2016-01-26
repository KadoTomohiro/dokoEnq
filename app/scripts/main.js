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
      'dokoEnq.service.firebase'
    ])
    .run(function($rootScope){//, $location, $route, AuthService) {
      $rootScope.$on('$routeChangeStart', function(ev, next, current) {
        console.log('$routeChangeStart');
        // if (next.controller == 'LoginCtrl') {
        //   if (AuthService.isLogged()) {
        //     $location.path('/');
        //     $route.reload();
        //   }
        // } else {
        //   if (AuthService.isLogged() == false) {
        //     $location.path('/login');
        //     $route.reload();
        //   }
        // }
      });
    })
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

  AppController.$inject = ['$rootScope', '$location', 'firebaseService'];

  /**
   * AppController
   *
   * @class AppController
   * @main dokoEnq
   * @constructor
   */
  function AppController ($rootScope, $location, firebaseService) {
    console.log('AppController construction');
    this.fb = firebaseService;
    this.$location = $location;

    vm = this;

    // $rootScope.$on('$locationChangeStart', function() {
    //   console.log(vm.fb.authData);
    //   if (vm.fb.authData) {
    //     console.log('authorication!');
    //   } else {
    //     console.log('no authorication!');
    //     vm.$location.path('/signin');
    //   }
    // });

    this.fb.auth.$onAuth(function(authData) {
      vm.fb.authData = authData;
    });
  }

   AppController.prototype.signOut = function () {
     vm.fb.auth.$unauth();
   }

  var vm;
})();
