'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('biographies/id', {
        url: '/biographies/{id}',
        templateUrl: 'app/biographies/id/id.html',
        controller: 'BiographiesIdCtrl'
      });
  });
