'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fallen', {
        url: '/fallen',
        templateUrl: 'app/fallen/fallen.html',
        controller: 'FallenCtrl',
        controllerAs: 'ctrl',
        resolve: {
          fallenList: ['Person', function(Person) {
            // the following makes sure fallenList is resolved before controller
            // executes by returning $promise
            return Person.query().$promise;
          }]
        }
      });
  });
