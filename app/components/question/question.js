/**
 * Question Components module.
 *
 * @module dokoEnq.components.question
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.question', ['ngResource'])
    .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['questionService', '$resource', '$log', '$rootScope', 'AnswerService'];

  /**
   * QuestionController
   *
   * @class QuestionController
   * @constructor
   */
  function QuestionController(questionService) {
    vm = this;
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
  QuestionController.prototype.activate = function(questionService, $resource, $log, $rootScope, AnswerService) {
    console.log('QuestionController activate Method');
    vm = this;
    vm.questionService = questionService;
    vm.AnswerService = AnswerService;

    vm.question = vm.questionService.get('enquete1');
    vm.answer = {};
    angular.forEach(vm.question.questions, function(val, key) {
      vm.answer[key] = undefined;
    });
    // vm.question =  vm.questionService.get();
    //
    // vm.questionService.get("enquete1")
    //   .then(function(questionObj) {
    //     vm.question = questionObj;
    //     $log.debug('then');
    //     $log.debug(vm.question);
    //
    //     vm.answer = {};
    //     angular.forEach(vm.question.questions, function(val, key) {
    //       vm.answer[key] = undefined;
    //     });
    //   });
    //
    // $rootScope.$watch(function() {return vm.question} ,function () {
    //   console.log('setQuestion', vm.question);
    //   vm.question = vm.question;
    // })
    vm.hoge = 'fuga';
    // vm.questions = vm.questionAll.enquetes.enquete1.questions;
    $log.debug('questionsController');
    $log.debug(vm.question);
    // $log.debug(vm.questions);
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

  QuestionController.prototype.temporarilyStored = function() {
    console.log('QuestionController temporarilyStored Method');
    vm = this;

    vm.AnswerService.tempStore('enquete1', vm.answer);
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
