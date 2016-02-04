/**
 * Enquete Service module.
 *
 * @module dokoEnq.service.enquete
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.service.enquete', [])
    .factory('EnqueteService', EnqueteService);

  EnqueteService.$inject = [
    'firebaseService'
  ];

  /**
   * EnqueteService
   *
   * @class EnqueteService
   * @constructor
   */
  function EnqueteService(firebaseService) {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */

    var getEnquete = function(id) {
      console.log('enquete id:', id);
      return firebaseService.object.enquetes[id];
    };

    var enqueteService = {
      getEnquete: getEnquete
    };

    return enqueteService;
  }

})();
