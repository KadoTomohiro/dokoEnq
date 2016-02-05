(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.enquete', [])
    .factory('EnqueteService', EnqueteService);

  function EnqueteService() {
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
