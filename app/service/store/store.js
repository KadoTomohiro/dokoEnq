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

  StoreService.$inject = [];

  /**
   * StoreService
   *
   * @class StoreService
   * @constructor
   */
  function StoreService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var storeService = {
      someMethod: function() {
        return;
      }
    };

    return storeService;
  }

})();
