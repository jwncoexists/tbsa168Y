'use strict';

var app = angular.module('tbsa168App');

app.controller('PdfCtrl', ['$scope', 'Auth', 'TbsData', '$stateParams', '$location',
  function ($scope, Auth, TbsData, $stateParams, $location)  {

    $scope.personId = $stateParams.id;
    console.log('PdfCtrl, personId=', $scope.personId);

  }]);
