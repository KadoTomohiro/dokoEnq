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

    var setStatus = function() {
      onlineStatus.onLine = $window.navigator.onLine;
      console.log(onlineStatus.onLine ? 'online' : 'offline', 'now!');

      $rootScope.$digest();
    };

    $window.addEventListener('online',setStatus, true);

    $window.addEventListener('offline', setStatus, true);

    return onlineStatus;
  }

})();
