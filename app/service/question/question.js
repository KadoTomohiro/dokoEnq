(function() {
  'use strict';
  angular
    .module('dokoEnq.service.question', ['ngResource'])
    .service('questionService', questionService);

  questionService.$inject = ['$log', '$resource'];

  function questionService($log, $resource) {
    var get = function(enqueteId) {
      var question = $resource('dataSample2.json').get().$promise
        .then(function(questionJson) {
          $log.debug('get');
          $log.debug(questionJson);
          return angular.fromJson(questionJson).enquetes[enqueteId];
        });
      return question;
    };
    var method = {
      get : get
    };
    return method;
  }
})();
