/**
 * Store Service module.
 *
 * @module dokoEnq.service.store
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.store', [
      'ngStorage'
    ])
    .factory('StoreService', StoreService);

  StoreService.$inject = ['$localStorage'];

  /**
   * StoreService
   *
   * @class StoreService
   * @constructor
   */
  function StoreService($localStorage) {

    var store = function () {

    };

    var storeService = {
      store: store;
    };

    return storeService;
  }

})();
