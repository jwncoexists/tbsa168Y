'use strict';

var app = angular.module('tbsa168App');

app.controller('NewslettersCtrl', ['$scope', 'Auth',
  function ($scope, Auth)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.newsletters = [];
    var item = {
      path: "/assets/images/Newsletter-20140914.pdf",
      displayName: "Sep 28, 2014",
      description: ""
    };
    $scope.newsletters.push (item);
    item = {
      path: "/assets/images/Newsletter-20141110.pdf",
      displayName: "Nov 10, 2014",
      description: ""
    };
    $scope.newsletters.push (item);
    item = {
      path: "/assets/images/Newsletter-20141224.pdf",
      displayName: "Dec 24, 2014",
      description: ""
    };
    $scope.newsletters.push (item);

    $scope.clickNewsletter = function(nl) {
      window.open(nl.path, "TBS Newsletter", "width=400, height=400");
      toastr.info('Newsletter opened in a separate browser window.');
    }

}]);
