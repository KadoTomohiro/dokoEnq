(function() {
  'use strict';

  describe('Controller: SigninController', function() {

    beforeEach(module('dokoEnq.components.signin'));

    var SigninController;

    beforeEach(inject(function($controller) {
      SigninController = $controller('SigninController');
    }));

    describe('SigninController', function() {
      it('Test Case', function() {
        SigninController.activate();
      });
    });
  });
})();
