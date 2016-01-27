/**
 * Question Components module.
 *
 * @module dokoEnq.components.question
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.components.question', [])
    .controller('QuestionController', QuestionController);

  QuestionController.$inject = [];

  /**
   * QuestionController
   *
   * @class QuestionController
   * @constructor
   */
  function QuestionController() {
    console.log('QuestionController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  QuestionController.prototype.canActivate = function() {
    console.log('QuestionController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  QuestionController.prototype.activate = function() {
    console.log('QuestionController activate Method');
    vm = this;
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  QuestionController.prototype.canDeactivate = function() {
    console.log('QuestionController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  QuestionController.prototype.deactivate = function() {
    console.log('QuestionController deactivate Method');
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
