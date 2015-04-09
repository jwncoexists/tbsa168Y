'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData', '$location',
  function ($scope, Auth, TbsData, $location)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.fallen = {};
    $scope.fallen.filterStr = "";
    $scope.displayFull = {};
    $scope.fallenList = [];
    var minBioChars = 450;
    TbsData.getPersons( function(data) {
      $scope.fallenList = data;
      // turn off full display for everyone to start
      for (var i=0; i < $scope.fallenList.length; i++) {
        $scope.displayFull[$scope.fallenList[i]._id] = false;
      }

    });
    $scope.editPerson = function(id) {
      // go to the edit fallen form
      $location.path('/fallen/' + id);
    }
    $scope.toggleMore = function(id) {
      console.log('toggling more, id =', id);
      $scope.apply($scope.displayFull[id] = !$scope.displayFull[id]);
    }
    $scope.showMoreLink = function(person) {
      return ((person.bioHtml.length > minBioChars) &&
             ($scope.displayFull[person._id] === false));
    }
    $scope.showLessLink = function(person) {
      return ((person.bioHtml.length > minBioChars) &&
             ($scope.displayFull[person._id] === true));
    }
    $scope.filterList = function(person) {
      if (!$scope.fallen.filterStr || $scope.fallen.filterStr === "") {
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
    $scope.getBio = function(person) {
      if ($scope.displayFull[person._id] || person.bioHtml.length <= minBioChars) {
        return person.bioHtml;
      } else {
        // shorten bio and strip out HTML tags so won't mess up display
        var shortenedBio = person.bioHtml.slice(0,minBioChars);
        var strippedBio = shortenedBio.replace(/(<([^>]+)>)/ig,"");
        strippedBio = strippedBio.replace(/[<>\/]/ig,"");
        // strippedBio = strippedBio.replace(/>/ig,"");
        return strippedBio;
      }
    }


}]);
