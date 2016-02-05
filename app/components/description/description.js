/**
 * Description Components module.
 *
 * @module dokoEnq.components.description
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.components.description', [])
    .controller('DescriptionController', DescriptionController);

  DescriptionController.$inject = [
    'questionService'
  ];

  /**
   * DescriptionController
   *
   * @class DescriptionController
   * @constructor
   */
  function DescriptionController(questionService) {
    console.log('DescriptionController Constructor');

    this.questionService = questionService;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  DescriptionController.prototype.canActivate = function() {
    console.log('DescriptionController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  DescriptionController.prototype.activate = function() {
    console.log('DescriptionController activate Method');
    vm = this;

    this.question = vm.questionService.get();
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  DescriptionController.prototype.canDeactivate = function() {
    console.log('DescriptionController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  DescriptionController.prototype.deactivate = function() {
    console.log('DescriptionController deactivate Method');
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
