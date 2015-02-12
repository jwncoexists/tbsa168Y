'use strict';

var app = angular.module('tbsa168App');

app.controller('ContactCtrl', ['$scope', 'Auth',
  function ($scope, Auth){
    $scope.isLoggedIn = Auth.isLoggedIn;
}]);
