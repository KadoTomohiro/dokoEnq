/**
 * Confirm Components module.
 *
 * @module dokoEnq.components.confirm
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.confirm', [])
    .controller('ConfirmController', ConfirmController);

  ConfirmController.$inject = ['AnswerService', 'questionService'];

  /**
   * ConfirmController
   *
   * @class ConfirmController
   * @constructor
   */
  function ConfirmController(AnswerService, questionService) {
    console.log('ConfirmController Constructor');
    this.AnswerService = AnswerService;
    this.questionService = questionService;
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
    this.tempAnswer = vm.AnswerService.tempRestore('enquete1');
    vm.questions = vm.questionService.get('enquete1').questions;
    // .then(function(questionObj) {
    //   vm.questions = questionObj.questions;
    // });
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
  // ConfirmController.prototype.temporarilyRestored = function() {
  //   console.log('ConfirmController temporarilyRestored Method');
  //   vm = this;
  //   var tempAnswer = vm.AnswerService.tempRestore('personal');
  //   console.log(tempAnswer);
  // };
  ConfirmController.prototype.store = function() {
    console.log('ConfilmController store Method');
    vm = this;

    vm.AnswerService.store('enquete1');
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
