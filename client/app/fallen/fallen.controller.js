'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth',
  function ($scope, Auth)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
}]);
