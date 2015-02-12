'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fallen', {
        url: '/fallen',
        templateUrl: 'app/fallen/fallen.html',
        controller: 'FallenCtrl'
      });
  });