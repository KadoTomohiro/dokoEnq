(function () {
  'use strict';

  describe('Service: FirebaseService', function() {

    var FirebaseService, $rootScope;

    beforeEach(module('dokoEnq.service.firebase'));

    beforeEach(inject(function (_$rootScope_, _FirebaseService_) {
      FirebaseService = _FirebaseService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
