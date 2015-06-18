'use strict';

var app = angular.module('tbsa168App');

app.controller('RosterCtrl', ['$scope', 'Auth', 'TbsData', 'personList', 'Person',
  function ($scope, Auth, TbsData, personList, Person)  {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.roster = {}; // object for controller variables
    $scope.roster.filterStr = "";
    $scope.personList = personList;

    $scope.curSort = {
      field: "name",
      order: "asc"
    };

    $scope.atReunion = function(person, year) {
      if (person.reunions) {
        return (person.reunions.indexOf(year) >= 0);
      } else {
        return false;
      }
    };
    $scope.getReunionClass = function(person) {
      if ($scope.atReunion(person, '2015')) {
        return "roster-reunion-cell";
      }
      else {
        return "roster-no-reunions";
      }
    }

    $scope.updatePerson = function(person) {
      person.$update(function (){});
    };

    $scope.getCellClass = function(person, property) {
      var cellClass = "";
      if (!person[property] || person[property] == "" || person[property] == undefined) {
        cellClass += "roster-empty-cell "
      } else {
        cellClass += "roster-data-cell "
      }

      if (person.officer) {
        cellClass += "roster-officer-cell "
      }

      if (!person.living) {
        cellClass += "roster-deceased-cell "
      }


      return cellClass;
    }

    $scope.formatMos = function(person) {
      if (person.mos) {
        return ("0" + person.mos).slice (-2);
      }
    }

    $scope.getLocation = function(person) {
      if (person.living === true) {
        return person.location;
      } else {
        return "At Rest: " + person.restingPlace;
      }
    }


}]); // RosterCtrl
