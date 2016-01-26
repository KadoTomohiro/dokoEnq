/**
 * Firebase Service module.
 *
 * @module dokoEnq.service.firebase
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.firebase', [])
    .factory('firebaseService', FirebaseService);

  FirebaseService.$inject = ['$firebaseObject', '$firebaseArray', '$firebaseAuth'];

  /**
   * FirebaseService
   *
   * @class FirebaseService
   * @constructor
   */
  function FirebaseService($firebaseObject, $firebaseArray, $firebaseAuth) {

    var ref = new Firebase('https://dokoenq.firebaseio.com');

    var object = $firebaseObject(ref);
    var array = $firebaseArray(ref);
    var auth = $firebaseAuth(ref);
    var authData = {};

    var firebaseService = {
      object: object,
      array: array,
      auth: auth,
      authData: authData
    };

    return firebaseService;
  }

})();
