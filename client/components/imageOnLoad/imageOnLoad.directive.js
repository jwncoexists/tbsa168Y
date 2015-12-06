'use strict';

angular.module('tbsa168App')
  .directive('imageOnLoad', function () {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) { //jshint ignore:line
          scope.$emit('imageIn');
          element.bind('load', function() {
            scope.$emit('imageLoaded');
          });
      }
    };
  });
