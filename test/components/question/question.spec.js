(function() {
  'use strict';

  describe('Controller: QuestionController', function() {

    beforeEach(module('dokoEnq.components.question'));

    var QuestionController;

    beforeEach(inject(function($controller) {
      QuestionController = $controller('QuestionController');
    }));

    describe('QuestionController', function() {
      it('Test Case', function() {
        QuestionController.activate();
      });
    });
  });
})();
