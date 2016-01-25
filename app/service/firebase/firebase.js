/**
 * Firebase Service module.
 *
 * @module dokoEnq.service.firebase
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.firebase', [])
    .factory('FirebaseService', FirebaseService);

  FirebaseService.$inject = ['$firebaseAuth', '$firebaseObject', '$firebaseArray'];

  /**
   * FirebaseService
   *
   * @class FirebaseService
   * @constructor
   */
  function FirebaseService($firebaseAuth, $firebaseObject, $firebaseArray) {

    var ref = new Firebase('https://dokoenq.firebaseio.com');

    var auth = $firebaseAuth(ref);
    var object = $firebaseObject(ref);
    var array = $firebaseArray(ref);

    var firebaseService = {
      auth: auth,
      object: object,
      array: array
    };

    return firebaseService;
  }

})();
