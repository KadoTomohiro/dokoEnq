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

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var answerService = {
      someMethod: function() {
        return;
      }
    };

    return answerService;
  }

})();
