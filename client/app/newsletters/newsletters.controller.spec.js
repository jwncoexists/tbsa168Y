'use strict';

describe('Controller: NewslettersCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var NewslettersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewslettersCtrl = $controller('NewslettersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
