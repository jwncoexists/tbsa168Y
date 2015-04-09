'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenIdCtrl', ['$scope', 'Auth', 'TbsData', '$stateParams', '$location',
  function ($scope, Auth, TbsData, $stateParams, $location)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.person = {};
    console.log('stateParams = ', $stateParams);
    $scope.person._id = $stateParams.id;
    TbsData.getPerson($scope.person._id, function(data) {
      console.log('back from getPerson: ', data);
      $scope.person.photo = data.photo;
      $scope.person.name = data.name;
      $scope.person.date = data.date;
      $scope.person.restingPlace = data.restingPlace;
      $scope.person.platoon = data.platoon;
      $scope.person.bioHtml = data.bioHtml;
      $scope.person.bio = data.bio;
      $scope.person.bioPhoto  = data.bioPhoto;
    });
    $scope.submit = function() {
      console.log('$scope.submit');
      TbsData.updatePerson($scope.person, function(data) {
        toastr.info( $scope.person.name + ' successfully updated.');
        $location.path('/fallen');
      });
    };
    $scope.cancel = function() {
      $location.path('/fallen');
    };
  }]);
