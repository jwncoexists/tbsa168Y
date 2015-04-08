'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fallen/id', {
        url: '/fallen/{id}',
        templateUrl: 'app/fallen/id/id.html',
        controller: 'FallenIdCtrl'
      });
  });
