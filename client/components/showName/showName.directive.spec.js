'use strict';

describe('Directive: showName', function () {

  // load the directive's module and view
  beforeEach(module('tbsa168App'));
  beforeEach(module('components/showName/showName.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-name></show-name>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the showName directive');
  }));
});
