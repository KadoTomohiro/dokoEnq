(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.store', [])
    .factory('StoreService', StoreService);

  function StoreService() {
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
