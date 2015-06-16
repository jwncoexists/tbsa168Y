'use strict';

describe('Directive: navbarOption', function () {

  // load the directive's module
  beforeEach(module('tbsa168App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navbar-option></navbar-option>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navbarOption directive');
  }));
});
