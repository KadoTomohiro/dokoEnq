/**
 * Store Components module.
 *
 * @module dokoEnq.components.store
 */
(function() {
  'use strict';

  angular
    .module('dokoEnq.components.store', [])
    .controller('StoreController', StoreController);

  StoreController.$inject = ['StoreService', '$firebaseArray', 'OnlineStatusService', 'questionService', '$rootScope'];

  /**
   * StoreController
   *
   * @class StoreController
   * @constructor
   */
  function StoreController(StoreService, $firebaseArray, OnlineStatusService, questionService, $rootScope) {
    console.log('StoreController Constructor');
    this.StoreService = StoreService;
    this.$firebaseArray = $firebaseArray;
    this.OnlineStatus = OnlineStatusService;
    this.questionService = questionService;
    this.$rootScope = $rootScope;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  StoreController.prototype.canActivate = function() {
    console.log('StoreController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  StoreController.prototype.activate = function() {
    console.log('StoreController activate Method');
    vm = this;

    var ref = new Firebase('https://dokoenq.firebaseio.com/answers/enquete1');
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    vm.pushed = vm.$firebaseArray(ref);
    console.log(vm.pushed);
    vm.unpushed = vm.StoreService.getLocalAnsewrs();
    vm.isOnline = vm.OnlineStatus.isOnline;
    vm.question = vm.questionService.get('enquete1');

    vm.chartColumns = {
      // q2: [{
      //   'id': 'q2',
      //   'type': 'bar',
      //   'name': vm.question.questions.q2.question,
      // }]
    };

    vm.chartData = {
      q2: []
    };

    this.piePoints = {
      'q3': [{
        'pie1': 70,
        'pie2': 30,
        'pie3': '100'
      }]
    };
    this.pieColumns = {
      'q3': [{
        'id': 'pie1',
        'type': 'pie'
      }, {
        'id': 'pie2',
        'type': 'pie'
      }, {
        'id': 'pie3',
        'type': 'pie'
      }]
    };

    this.$rootScope.$watch(function() {
      return vm.pushed;
    }, function() {

    });

    this.$rootScope.$watch(function() {
      return vm.unpushed;
    }, function() {

    });

  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  StoreController.prototype.canDeactivate = function() {
    console.log('StoreController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  StoreController.prototype.deactivate = function() {
    console.log('StoreController deactivate Method');
    vm = this;
  };

  StoreController.prototype.allPush = function() {
    console.log('StoreController allPush Method');

    vm = this;
    vm.StoreService.allPush();
    vm.unpushed = vm.StoreService.getLocalAnsewrs();

  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
