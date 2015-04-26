'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pdf', {
        url: '/fallen/pdf/{id}',
        templateUrl: 'app/fallen/pdf/pdf.html',
        controller: 'PdfCtrl'
      });
  });
