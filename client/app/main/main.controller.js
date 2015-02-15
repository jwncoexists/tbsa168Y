'use strict';

var app = angular.module('tbsa168App');

app.controller('MainCtrl', ['$scope', 'Auth',
  function ($scope, Auth)  {
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.clickRegistration = function() {
        window.open("http://tbs1-68usmc.com/reunion-signup.html", "Register for Reunion", "width=400, height=400");
        toastr.info('Reunion Registration opened in a separate browser window.');
      }

}]);
