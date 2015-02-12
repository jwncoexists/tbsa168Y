'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newsletters', {
        url: '/newsletters',
        templateUrl: 'app/newsletters/newsletters.html',
        controller: 'NewslettersCtrl'
      });
  });