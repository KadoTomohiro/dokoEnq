(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.answer', [])
    .factory('AnswerService', AnswerService);

  function AnswerService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
