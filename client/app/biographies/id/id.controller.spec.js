'use strict';

describe('Controller: BiographiesIdCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var BiographiesIdCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BiographiesIdCtrl = $controller('BiographiesIdCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
