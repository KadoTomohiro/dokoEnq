(function() {
  'use strict';

  angular
    .module('dokoEnq.mock.service.onlinestatus', [])
    .factory('OnlineStatusService', OnlineStatusService);

  function OnlineStatusService() {
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
