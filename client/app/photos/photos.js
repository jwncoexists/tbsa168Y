'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('photos', {
        url: '/photos',
        templateUrl: 'app/photos/photos.html',
        controller: 'PhotosCtrl'
      });
  });
