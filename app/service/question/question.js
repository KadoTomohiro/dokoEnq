(function() {
  'use strict';
  angular
    .module('dokoEnq.service.question', ['ngResource'])
    .service('questionService', questionService);

  questionService.$inject = ['$http', '$log', '$resource'];

  function questionService($http, $log, $resource) {
    var get = function() {
      var questions = $resource('dataSample2.json').get();
      $log.debug(questions);
      return questions;
    };
    var method = {
      get : get
    };
    return method;
  }
})();
