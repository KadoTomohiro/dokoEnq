/**
 * Auth Service module.
 *
 * @module dokoEnq.service.auth
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.auth', [])
    .factory('AuthService', AuthService);

  AuthService.$inject = [firebase];

  /**
   * AuthService
   *
   * @class AuthService
   * @constructor
   */
  function AuthService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var authService = {
      someMethod: function() {
        return;
      }
    };

    return authService;
  }

})();
