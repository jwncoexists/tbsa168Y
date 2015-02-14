'use strict';

describe('Directive: targetBlank', function () {

  // load the directive's module
  beforeEach(module('tbsa168App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<target-blank></target-blank>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the targetBlank directive');
  }));
});