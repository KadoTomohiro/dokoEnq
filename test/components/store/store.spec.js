(function() {
  'use strict';

  describe('Controller: StoreController', function() {

    beforeEach(module('dokoEnq.components.store'));

    var StoreController;

    beforeEach(inject(function($controller) {
      StoreController = $controller('StoreController');
    }));

    describe('StoreController', function() {
      it('Test Case', function() {
        StoreController.activate();
      });
    });
  });
})();
