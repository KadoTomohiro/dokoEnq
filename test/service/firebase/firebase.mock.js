(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.firebase', [])
    .factory('FirebaseService', FirebaseService);

  function FirebaseService() {
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
