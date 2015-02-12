'use strict';

describe('Directive: contactUs', function () {

  // load the directive's module and view
  beforeEach(module('tbsa168App'));
  beforeEach(module('components/contactUs/contactUs.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contact-us></contact-us>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contactUs directive');
  }));
});
