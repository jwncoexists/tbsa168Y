'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth',
  function ($scope, Auth)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.fallen  = {};
    $scope.fallen.filterStr = "";
    $scope.fallenList = [];
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Allen, Joe",
      date: "24 May 1968",
      restPlace: "Long Beach City Cem, MS",
      platoon: "1st"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Barnes, Rob",
      date: "30 May 1968",
      restPlace: "Santa Fe Natl Cem, NM",
      platoon: "1st"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Cross, Terry",
      date: "04 Mar 1968",
      restPlace: "Oakdale Cem, LA",
      platoon: "1st"
    };
    $scope.fallenList.push (person);

    // 2nd platoon
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "DeCraene, Alan",
      date: "16 Feb 1970",
      restPlace: "Centre County Mem Park, PA",
      platoon: "2nd"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Eckenrode, Dave",
      date: "21 Jul 1968",
      restPlace: "Centre County Mem Park, PA",
      platoon: "2nd"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Gates, Albert",
      date: "07 Mar 1970",
      restPlace: "Courts of the MIssing, MIA Mem, HI",
      platoon: "2nd"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Gibson, Carl",
      date: "30 Apr 1968",
      restPlace: "Univ of VA Confederate Cem, VA",
      platoon: "2nd"
    };
    $scope.fallenList.push (person);
    var person = {
      image: "/assets/images/04-muir-jim.png",
      name: "Hagan, Bob",
      date: "31 Mar 1978",
      restPlace: "Arlington Nat'l Cem, VA",
      platoon: "2nd"
    };
    $scope.fallenList.push (person);
}]);
