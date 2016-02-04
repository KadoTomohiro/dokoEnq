/**
 * Home Components module.
 *
 * @module dokoEnq.components.home
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [
    'UserService',
    'EnqueteService'
  ];

  /**
   * HomeController
   *
   * @class HomeController
   * @constructor
   */
  function HomeController(UserService, EnqueteService) {
    console.log('HomeController Constructor');

    this.user = UserService;
    this.enquete = EnqueteService;

    vm = this;

  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  HomeController.prototype.canActivate = function() {
    console.log('HomeController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  HomeController.prototype.activate = function() {
    console.log('HomeController activate Method');
    // console.log(vm.user);
    // if (vm.user.data.enquetes) {
    //   angular.forEach(vm.user.data.enquetes, function(id) {
    //     vm.enquetes.push(vm.enquete.getEnquete[id]);
    //   });
    // }

  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  HomeController.prototype.canDeactivate = function() {
    console.log('HomeController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  HomeController.prototype.deactivate = function() {
    console.log('HomeController deactivate Method');
  };

  var vm;

})();
