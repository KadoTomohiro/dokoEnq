(function() {
  'use strict';

  describe('Controller: ConfirmController', function() {

    beforeEach(module('dokoEnq.components.confirm'));

    var ConfirmController;

    beforeEach(inject(function($controller) {
      ConfirmController = $controller('ConfirmController');
    }));

    describe('ConfirmController', function() {
      it('Test Case', function() {
        ConfirmController.activate();
      });
    });
  });
})();
