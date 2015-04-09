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
    $scope.editPerson = function(id) {
      // go to the edit fallen form
      $location.path('/fallen/' + id);
    }
    $scope.filterList = function(person) {
      console.log ('filterList, filterStr, person:', $scope.fallen.filterStr, person);
      if (!$scope.fallen.filterStr || $scope.fallen.filterStr === "") {
        console.log('returning true');
        return true;
      }
      var filter = $scope.fallen.filterStr.toLowerCase();
      var platoon1 = person.platoon.toLowerCase();
      var platoon2 = platoon1 + " platoon";
      var name = person.name.toLowerCase();
      var resting = person.restingPlace.toLowerCase();
      if ((name.indexOf(filter) > -1) ||
         (platoon1.indexOf(filter) > -1) ||
         (platoon2.indexOf(filter) > -1) ||
         (resting.indexOf(filter) > -1))   {
           return true;
      } else {
        return false;
      }
    }


}]);
