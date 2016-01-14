(function() {
  'use strict';

  describe('Controller: PersonalController', function() {

    beforeEach(module('dokoEnq.components.personal'));

    var PersonalController;

    beforeEach(inject(function($controller) {
      PersonalController = $controller('PersonalController');
    }));

    describe('PersonalController', function() {
      it('Test Case', function() {
        PersonalController.activate();
      });
    });
  });
})();
