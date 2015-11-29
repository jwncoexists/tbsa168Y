'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('biopdf', {
        url: '/biographies/pdf/{id}',
        templateUrl: 'app/biographies/pdf/pdf.html',
        controller: 'PdfCtrl'
      });
  });
