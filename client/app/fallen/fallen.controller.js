'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData', '$location',
  function ($scope, Auth, TbsData, $location)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.fallen = {};
    $scope.fallen.filterStr = "";
    $scope.fallenList = [];
    TbsData.getPersons( function(data) {
      $scope.fallenList = data;
      console.log('fallenList =', $scope.fallenList);
    });
    $scope.editPerson = function(index) {
      // go to the edit fallen form
      $location.path('/fallen/' + $scope.fallenList[index]._id);
    }

}]);
