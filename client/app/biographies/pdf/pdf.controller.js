'use strict';

var app = angular.module('tbsa168App');

app.controller('PdfCtrl', ['$scope', 'Auth', 'TbsData', '$stateParams',
  function ($scope, Auth, TbsData, $stateParams)  {

    $scope.personId = $stateParams.id;
    // console.log('PdfCtrl, personId=', $scope.personId);

  }]);
