'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData',

  function ($scope, Auth, TbsData)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.fallen = {};
    $scope.fallen.filterStr = "";
    $scope.fallenList = [];
    TbsData.getPersons( function(data) {
      $scope.fallenList = data;
      console.log('fallenList =', $scope.fallenList);
    });

}]);
