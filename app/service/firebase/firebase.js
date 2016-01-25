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

  FirebaseService.$inject = [];

  /**
   * FirebaseService
   *
   * @class FirebaseService
   * @constructor
   */
  function FirebaseService() {

    var ref = new Firebase('https://dokoenq.firebaseio.com');

    // var firebaseService = {
    //   someMethod: function() {
    //     return;
    //   }
    // };

    return ref;
  }

})();
