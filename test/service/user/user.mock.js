(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.user', [])
    .factory('UserService', UserService);

  function UserService() {
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
