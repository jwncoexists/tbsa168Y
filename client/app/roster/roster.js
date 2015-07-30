'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('roster', {
        url: '/roster',
        templateUrl: 'app/roster/roster.html',
        controller: 'RosterCtrl',
        controllerAs: 'controller',
        resolve: {
          personList: ['Person', function(Person) {
            // the following makes sure personList is resolved before controller
            // executes by returning $promise
            return Person.query().$promise;
          }]
        }
      });
  });
