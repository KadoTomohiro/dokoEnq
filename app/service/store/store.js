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

  StoreService.$inject = ['$localStorage', '$firebaseObject'];

  /**
   * StoreService
   *
   * @class StoreService
   * @constructor
   */
  function StoreService($localStorage, $firebaseObject) {

    var store = function(answer) {

      if (navigator.onLine) {
        console.log('online!');
        pushServer(answer);
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

    var pushServer = function(answer) {
      console.log('push fire base');
      var ref = new Firebase('https://dokoenq.firebaseio.com');
      console.log(ref);
      ref.child('answers').push(answer, function(error) {
        if (angular.isObject(error)) {
          return false;
        }
      });
      return true;
    };

    var allPush = function() {
      var answers = getLocalAnsewrs();

      var sucsess = true;
      angular.forEach(function(answer) {
        sucsess = sucsess && pushServer(answer);
      });

      delete $localStorage.answer;
    };

    var getLocalAnsewrs = function() {
      return angular.fromJson($localStorage.answers);
    };

    var storeService = {
      store: store,
      allPush: allPush,
      getLocalAnsewrs: getLocalAnsewrs
    };

    return storeService;
  }

})();
