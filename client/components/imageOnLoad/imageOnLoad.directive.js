'use strict';

angular.module('tbsa168App')
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          scope.$emit('imageIn');
          element.bind('load', function() {
            scope.$emit('imageLoaded');
          });
      }
    };
  });
