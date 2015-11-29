'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('biographies', {
        url: '/biographies',
        templateUrl: 'app/biographies/biographies.html',
        controller: 'BiographiesCtrl',
        controllerAs: 'ctrl',
        resolve: {
          personList: ['Person', function(Person) {
            // the following makes sure personList is resolved before controller
            // executes by returning $promise
            return Person.query().$promise;
          }]
        }
      });
  });
