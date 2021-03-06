'use strict';

describe('Directive: routeLoadingIndicator', function () {

  // load the directive's module and view
  beforeEach(module('tbsa168App'));
  beforeEach(module('components/routeLoadingIndicator/routeLoadingIndicator.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<route-loading-indicator></route-loading-indicator>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the routeLoadingIndicator directive');
  }));
});
