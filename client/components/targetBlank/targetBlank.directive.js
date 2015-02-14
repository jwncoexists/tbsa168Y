'use strict';
// checks to see if the ng-href of the element points to an external link,
// and if so, adds target=_blank
angular.module('tbsa168App')
  .directive('targetBlank', function () {
    return {
      template: '',
      restrict: 'A',
      link: function (scope, element, attrs) {
        var href = attrs.ngHref;
        if(href.indexOf('http') > -1) {
          element.attr("target", "_blank");
        } else {
          element.attr("target", "self");
        }
      }
    };
  });
