'use strict';

describe('Controller: FallenIdCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var FallenIdCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FallenIdCtrl = $controller('FallenIdCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
