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

  AnswerService.$inject = [
    'StoreService'
  ];

  /**
   * AnswerService
   *
   * @class AnswerService
   * @constructor
   */
  function AnswerService(StoreService) {

    var temp = {};

    var tempStore = function(key, value) {
      temp[key] = value;
    };

    var tempRestore = function(key) {
      return temp[key];
    };

    var store = function () {
      console.log('answerService store Methos');
      StoreService.store(temp.personal);

      temp = {};
    };

    var answerService = {
      tempStore: tempStore,
      tempRestore: tempRestore,
      store: store
    };

    return answerService;

  }

})();
