(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.auth', [])
    .factory('AuthService', AuthService);

  function AuthService() {
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
