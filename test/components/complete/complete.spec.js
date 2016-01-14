(function() {
  'use strict';

  describe('Controller: CompleteController', function() {

    beforeEach(module('dokoEnq.components.complete'));

    var CompleteController;

    beforeEach(inject(function($controller) {
      CompleteController = $controller('CompleteController');
    }));

    describe('CompleteController', function() {
      it('Test Case', function() {
        CompleteController.activate();
      });
    });
  });
})();
