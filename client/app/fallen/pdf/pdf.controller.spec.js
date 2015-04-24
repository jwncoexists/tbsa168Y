'use strict';

describe('Controller: PdfCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var PdfCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PdfCtrl = $controller('PdfCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
