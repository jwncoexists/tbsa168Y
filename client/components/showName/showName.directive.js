'use strict';

angular.module('tbsa168App')
  .directive('showName', function () {
    return {
      templateUrl: 'components/showName/showName.html',
      restrict: 'EA',
      scope: {
        name: '=name',
        xmin: '=xmin',
        xmax: '=xmax',
        ymin: '=ymin',
        ymax: '=ymax',
      },
      link: function (scope, element, attrs) {
        $(".show-name").css({top: scope.xmin, left: scope.ymin, position:'relative'});
      },
      controller: function($scope) {
      }
    };
  });
