/**
 * EnqueteTitle Directive module.
 *
 * @module dokoEnq.directive.enquetetitle
 */
(function () {
  'use strict';

  angular
    .module('dokoEnq.directive.enquetetitle', [])
    .directive('dokoenqEnqueteTitle', EnqueteTitleDirective);

  EnqueteTitleDirective.$inject = [];

  /**
   * EnqueteTitleDirective
   *
   * @class EnqueteTitleDirective
   * @constructor
   */
  function EnqueteTitleDirective() {
    function EnquetetitleController() {
      this.title = 'タイトル';
    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/enquetetitle/enquetetitle.html',
      scope: {},
      controller: EnquetetitleController,
      controllerAs: 'vm',
      bindToController: {
        title: '@title'
      }
      // link: enquetetitleLink
    };
  }

})();
