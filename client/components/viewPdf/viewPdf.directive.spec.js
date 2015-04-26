'use strict';

describe('Directive: viewPdf', function () {

  // load the directive's module and view
  beforeEach(module('tbsa168App'));
  beforeEach(module('components/viewPdf/viewPdf.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<view-pdf></view-pdf>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the viewPdf directive');
  }));
});