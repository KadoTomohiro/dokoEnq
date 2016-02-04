(function () {
  'use strict';

  describe('Service: AuthService', function() {

    var AuthService, $rootScope;

    beforeEach(module('dokoEnq.service.auth'));

    beforeEach(inject(function (_$rootScope_, _AuthService_) {
      AuthService = _AuthService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
