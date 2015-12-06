'use strict';

angular.module('tbsa168App')
  .directive('routeLoadingIndicator', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: 'components/routeLoadingIndicator/routeLoadingIndicator.html',
      restrict: 'EA',
      link: function (scope, element, attrs) { //jshint ignore:line
        scope.isSateLoading = false;
        element.addClass('ng-hide');

        var viewportWidth;
        var viewportHeight;

        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth !== 'undefined')
        {
          viewportWidth = window.innerWidth;
          viewportHeight = window.innerHeight;
        }
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        else if (typeof document.documentElement !== 'undefined'  &&
             typeof document.documentElement.clientWidth !==
             'undefined' && document.documentElement.clientWidth !== 0)
        {
          viewportWidth = document.documentElement.clientWidth;
          viewportHeight = document.documentElement.clientHeight;
        }
        // older versions of IE
        else
        {
          viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
          viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
        }

        var loadingElement = $('.route-loading');
        loadingElement.css('width', viewportWidth);
        loadingElement.css('height', viewportHeight);

        var loadingIcon = $('.loading-icon');
        loadingIcon.css('top', viewportHeight/2);
        loadingIcon.css('left', viewportWidth/2);

        $rootScope.$on('$stateChangeStart', function(){
          scope.isStateLoading = true;
          element.removeClass('ng-hide');
        });

        $rootScope.$on('$stateChangeSuccess', function(){
          scope.isStateLoading = false;
          element.addClass('ng-hide');
        });
      }
    };
  }]);
