/**
 * Signin Components module.
 *
 * @module dokoEnq.components.signin
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.signin', [])
    .controller('SigninController', SigninController);

  SigninController.$inject = ['firebaseService', '$window', 'UserService'];

  /**
   * SigninController
   *
   * @class SigninController
   * @constructor
   */
  function SigninController(firebaseService, $window, UserService) {
    console.log('SigninController Constructor');

    this.firebaseService = firebaseService;
    this.$window = $window;
    this.user = UserService;
    vm = this;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  SigninController.prototype.canActivate = function() {
    console.log('SigninController canActivate Method');
    // console.log(vm.$location);

    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  SigninController.prototype.activate = function() {
    console.log('SigninController activate Method');
    vm = this;

    // console.log(vm.$location);
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  SigninController.prototype.canDeactivate = function() {
    console.log('SigninController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  SigninController.prototype.deactivate = function() {
    console.log('SigninController deactivate Method');
    vm = this;
  };

  SigninController.prototype.signin = function(provider) {

    vm.user.signIn(provider).then(function() {
      console.log('login Success!');
      vm.$window.history.back();
    }).catch(function(error) {
      console.log('Authentication failed:', error);
    });
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
