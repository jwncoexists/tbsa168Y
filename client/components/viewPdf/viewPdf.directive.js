'use strict';

angular.module('tbsa168App')
  .directive('viewPdf', ['TbsData',
  function (TbsData)  {
    return {
      templateUrl: 'components/viewPdf/viewPdf.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        console.log('view-pdf personId:', scope.personId);
        TbsData.getPerson(scope.personId, function(data) {
          console.log('back from getPerson: ', data);
          scope.pdfFile  = data.pdf;
          console.log('pdf file: ', scope.pdfFile);
          $('object').data('', scope.pdfFile);
        });

      }
    };
  }]);
