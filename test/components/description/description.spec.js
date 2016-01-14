(function() {
  'use strict';

  describe('Controller: DescriptionController', function() {

    beforeEach(module('dokoEnq.components.description'));

    var DescriptionController;

    beforeEach(inject(function($controller) {
      DescriptionController = $controller('DescriptionController');
    }));

    describe('DescriptionController', function() {
      it('Test Case', function() {
        DescriptionController.activate();
      });
    });
  });
})();
