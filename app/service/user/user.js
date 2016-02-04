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

  UserService.$inject = ['firebaseService', '$firebaseObject'];

  /**
   * UserService
   *
   * @class UserService
   * @constructor
   */
  function UserService(firebase, $firebaseObject) {

    var userData;

    var signIn = function(provider) {
      return firebase.auth.$authWithOAuthPopup(provider, {
        scope: 'email'
      }).then(function(authData) {
        userData = firebase.object.users[authData.uid];
      }).then(function() {
        var authData = firebase.authData;
        if (!userData) {
          firebase.object.users[authData.uid] = newUser(authData[provider].displayName);
          firebase.object.$save();
          userData = firebase.object.users[authData.uid];
          console.log('new User:', userData.name);
        }
      });
    };

    var signOut = function() {
      firebase.auth.$unauth();
    };

    // var getUser = function ()
    var userService = {
      signIn: signIn,
      signOut: signOut,
      data: function() {
        return userData;
      }
    };

    return userService;
  }

  function newUser(name) {
    if (!name) {
      name = "unknouwn";
    }
    return {
      name: name,
      enquetes: []
    };
  }

})();
