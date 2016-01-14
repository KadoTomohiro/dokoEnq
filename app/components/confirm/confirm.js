/**
 * Confirm Components module.
 *
 * @module dokoEnq.components.confirm
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.components.confirm', [])
    .controller('ConfirmController', ConfirmController);

  ConfirmController.$inject = [];

  /**
   * ConfirmController
   *
   * @class ConfirmController
   * @constructor
   */
  function ConfirmController() {
    console.log('ConfirmController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  ConfirmController.prototype.canActivate = function() {
    console.log('ConfirmController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ConfirmController.prototype.activate = function() {
    console.log('ConfirmController activate Method');
    vm = this;
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  ConfirmController.prototype.canDeactivate = function() {
    console.log('ConfirmController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  ConfirmController.prototype.deactivate = function() {
    console.log('ConfirmController deactivate Method');
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