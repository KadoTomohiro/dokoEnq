/**
 * User Service module.
 *
 * @module dokoEnq.service.user
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.user', [])
    .factory('UserService', UserService);

  UserService.$inject = ['firebaseService'];

  /**
   * UserService
   *
   * @class UserService
   * @constructor
   */
  function UserService(firebase) {

    var userData;

    var signIn = function(provider) {
      return firebase.auth.$authWithOAuthPopup(provider, {
        scope: 'email'
      }).then(function(authData) {
        userData = firebase.object.users[authData.uid];
      }).then(function() {
        if (!userData) {
          var authData = firebase.authData;

          userData = newUser(authData[provider].displayName)
          firebase.object.users[authData.uid] = userData;
          firebase.object.$save();

        }
        console.log(userData);
      });
    };

    var signOut = function() {
      firebase.auth.$unauth();
    };

    // var getUser = function ()
    var userService = {
      signIn: signIn,
      signOut: signOut,
      data: userData
    };

    return userService;
  }

  function newUser(name) {
    if (!name) {
      name = 'unknouwn';
    }
    return {
      name: name,
      enquetes: []
    };
  }

})();
