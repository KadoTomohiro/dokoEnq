/**
 * Answer Service module.
 *
 * @module dokoEnq.service.answer
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.answer', [])
    .factory('AnswerService', AnswerService);

  AnswerService.$inject = [];

  /**
   * AnswerService
   *
   * @class AnswerService
   * @constructor
   */
  function AnswerService() {

    var temp = {};

    var tempStore = function(key, value) {
      temp.key = value;
      console.log(temp);
    };

    var tempRestore = function(key) {
      return temp.key;
    };

    var answerService = {
      tempStore: tempStore,
      tempRestore: tempRestore
    };

    return answerService;

  }

})();
