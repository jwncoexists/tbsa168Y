'use strict';
// checks to see if the ng-href of the element points to an external link,
// and if so, adds target=_blank
angular.module('tbsa168App')
  .directive('targetBlank', [ '$locate', function ($locate) {
    return {
      template: '',
      restrict: 'A',
      link: function (scope, element, attrs) {
        var href = attrs.ngHref;
        if(href.indexOf('http') > -1) {
          element.attr("target", "_blank");
          // element.attr('ng-href', "/");
          // element.attr('onclick', "window.open('" + href + "', 'Classmate Map', 'width=300, height=250')");
        } else {
          $locate(href);
        }
      }
    };
  }]);
