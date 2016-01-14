/**
 * Store Service module.
 *
 * @module dokoEnq.service.store
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.store', [
      'ngStorage',
      'firebase'
    ])
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

    var localStore = function (answer) {
      console.log('store method');
      var answers = angular.fromJson($localStorage.answers);
      console.log(answers);
      if (!angular.isArray(answers)) {
        answers = [];
      }
      answers.push(answer);

      $localStorage.answers = angular.toJson(answers);
    };

    var pushServer = function (answer) {
      console.log('push fire base');
      var ref = new Firebase('https://dokoenq.firebaseio.com');
      console.log(ref);
      ref.child('answers').push(answer);
    };

    var storeService = {
      store: store
    };

    return storeService;
  }

})();
