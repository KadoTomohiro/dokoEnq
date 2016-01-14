/**
 * Complete Components module.
 *
 * @module dokoEnq.components.complete
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.components.complete', [])
    .controller('CompleteController', CompleteController);

  CompleteController.$inject = [];

  /**
   * CompleteController
   *
   * @class CompleteController
   * @constructor
   */
  function CompleteController() {
    console.log('CompleteController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  CompleteController.prototype.canActivate = function() {
    console.log('CompleteController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CompleteController.prototype.activate = function() {
    console.log('CompleteController activate Method');
    vm = this;
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  CompleteController.prototype.canDeactivate = function() {
    console.log('CompleteController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  CompleteController.prototype.deactivate = function() {
    console.log('CompleteController deactivate Method');
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
