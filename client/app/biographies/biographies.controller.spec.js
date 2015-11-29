'use strict';

describe('Controller: BiographiesCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var BiographiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BiographiesCtrl = $controller('BiographiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
