/**
 * Login Components module.
 *
 * @module dokoEnq.components.login
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.components.login', [])
    .controller('LoginController', LoginController);

  LoginController.$inject = [];

  /**
   * LoginController
   *
   * @class LoginController
   * @constructor
   */
  function LoginController() {
    console.log('LoginController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  LoginController.prototype.canActivate = function() {
    console.log('LoginController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  LoginController.prototype.activate = function() {
    console.log('LoginController activate Method');
    vm = this;
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  LoginController.prototype.canDeactivate = function() {
    console.log('LoginController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  LoginController.prototype.deactivate = function() {
    console.log('LoginController deactivate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
