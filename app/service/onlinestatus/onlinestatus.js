/**
 * OnlineStatus Service module.
 *
 * @module dokoEnq.service.onlinestatus
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.onlinestatus', [])
    .factory('OnlineStatusService', OnlineStatusService);

  OnlineStatusService.$inject = ['$window', '$rootScope'];

  /**
   * OnlineStatusService
   *
   * @class OnlineStatusService
   * @constructor
   */
  function OnlineStatusService($window, $rootScope) {

    var onlineStatus = {};

    onlineStatus.onLine = $window.navigator.onLine;

    onlineStatus.isOnline = function() {
      return onlineStatus.onLine;
    };

    $window.addEventListener('online', function() {
      onlineStatus.onLine = true;
      console.log('online!');
      $rootScope.$digest();
    }, true);

    $window.addEventListener('offline', function() {
      onlineStatus.onLine = false;
      console.log('offline');
      $rootScope.$digest();
    }, true);

    return onlineStatus;
  }

})();
