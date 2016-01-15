(function() {
  'use strict';

  describe('Controller: StoreManagerController', function() {

    beforeEach(module('dokoEnq.components.storemanager'));

    var StoreManagerController;

    beforeEach(inject(function($controller) {
      StoreManagerController = $controller('StoreManagerController');
    }));

    describe('StoreManagerController', function() {
      it('Test Case', function() {
        StoreManagerController.activate();
      });
    });
  });
})();
