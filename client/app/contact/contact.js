'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'controller'
      });
  });
