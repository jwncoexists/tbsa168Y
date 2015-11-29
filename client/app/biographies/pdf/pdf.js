'use strict';

angular.module('tbsa168App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pdf', {
        url: '/biographies/pdf/{id}',
        templateUrl: 'app/biographies/pdf/pdf.html',
        controller: 'PdfCtrl'
      });
  });
