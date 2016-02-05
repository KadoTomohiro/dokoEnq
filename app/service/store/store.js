/**
 * Store Service module.
 *
 * @module dokoEnq.service.store
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.store', [])
    .factory('StoreService', StoreService);

  StoreService.$inject = ['$localStorage', 'OnlineStatusService', '$window'];

  /**
   * StoreService
   *
   * @class StoreService
   * @constructor
   */
  function StoreService($localStorage, OnlineStatusService, $window) {

    var store = function(answer, id) {
      console.log(OnlineStatusService.isOnline());
      if (OnlineStatusService.isOnline()) {
        console.log('online!');
        pushServer(answer, id);
      } else {
        console.log('offline!');
        localStore(answer);
      }
      return true;
    };

    var localStore = function(answer) {
      console.log('store method');
      var answers = getLocalAnsewrs();
      console.log(answers);
      if (!angular.isArray(answers)) {
        answers = [];
      }
      console.log(answer);
      answers.push(answer);

      $localStorage.answers = angular.toJson(answers);
    };

    var pushServer = function(answer, enqueteId) {
      console.log('push fire base', enqueteId, answer);
      var ref = new Firebase('https://dokoenq.firebaseio.com/answers');
      console.log(ref);
      ref.child(enqueteId).push(answer, function(error) {
        if (angular.isObject(error)) {
          return false;
        }
      });
      return true;
    };

    var allPush = function() {
      console.log('StoreService allPush Method');
      var answers = getLocalAnsewrs();

      console.log(answers);
      angular.forEach(answers, function(answer) {
        console.log(answer);
        pushServer(answer, 'enquete1');
      });

      $localStorage.answers = undefined;
    };

    var getLocalAnsewrs = function() {
      return angular.fromJson($localStorage.answers);
    };

    // $window.addEventListener('online',allPush, true);

    var storeService = {
      store: store,
      allPush: allPush,
      getLocalAnsewrs: getLocalAnsewrs,
      offline: function() {
        var offline;
        if (navigator.onLine) {
          offline = false;
        } else {
          offline = true;
        }
        return offline;
      }
    };

    return storeService;
  }

})();
