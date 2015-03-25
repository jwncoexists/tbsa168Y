'use strict';

var app = angular.module('tbsa168App');

app.directive('navbarOption', ['$location', 'Auth', function ($location, Auth) {
    return {
      template: '',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.isLoggedIn = Auth.isLoggedIn;
      }, // link
      controller: function($scope) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.clickIt = function(nextLink) {
          if(nextLink.indexOf('http') > -1) {
            window.open(nextLink, "newwindow", "width=400, height=400");
            toastr.info( 'You request was opened in separate browser window.');
          } else {
            $location.path(nextLink);
          }
        }
      } // controller
    }; // return
}]);
