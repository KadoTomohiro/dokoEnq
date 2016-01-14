/**
 * Personal Components module.
 *
 * @module dokoEnq.components.personal
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.personal', [
      'ngFileUpload'
    ])
    .controller('PersonalController', PersonalController);

  PersonalController.$inject = ['Upload', 'AnswerService'];

  /**
   * PersonalController
   *
   * @class PersonalController
   * @constructor
   */
  function PersonalController(Upload, AnswerService) {
    console.log('PersonalController Constructor');
    this.Upload = Upload;
    this.AnswerService = AnswerService;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  PersonalController.prototype.canActivate = function() {
    console.log('PersonalController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  PersonalController.prototype.activate = function() {
    console.log('PersonalController activate Method');
    vm = this;

    var tempAnswer = vm.AnswerService.tempRestore('personal');

    angular.forEach(tempAnswer, function (value, key) {
      vm[key] = value;
    });
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  PersonalController.prototype.canDeactivate = function() {
    console.log('PersonalController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  PersonalController.prototype.deactivate = function() {
    console.log('PersonalController deactivate Method');
    vm = this;
  };

  PersonalController.prototype.temporarilyStored = function() {
    console.log('PersonalController temporarilyStored Method');
    vm = this;

    var answer = {
      affiliation: vm.affiliation,
      name: vm.name,
      email: vm.email
    };

    vm.AnswerService.tempStore('personal', answer);
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
