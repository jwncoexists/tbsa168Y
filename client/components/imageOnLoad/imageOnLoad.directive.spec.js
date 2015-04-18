'use strict';

describe('Directive: imageOnLoad', function () {

  // load the directive's module
  beforeEach(module('tbsa168App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-on-load></image-on-load>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageOnLoad directive');
  }));
});
