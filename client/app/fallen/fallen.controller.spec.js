'use strict';

describe('Controller: FallenCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var FallenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FallenCtrl = $controller('FallenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
