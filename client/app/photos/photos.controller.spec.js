'use strict';

describe('Controller: PhotosCtrl', function () {

  // load the controller's module
  beforeEach(module('tbsa168App'));

  var PhotosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotosCtrl = $controller('PhotosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
