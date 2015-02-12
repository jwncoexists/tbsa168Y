'use strict';

angular.module('tbsa168App')
  .directive('contactUs',  ['Auth',
  function (Auth) {
    return {
      templateUrl: 'components/contactUs/contactUs.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.isLoggedIn = Auth.userLoggedIn;
        scope.success = false;
        scope.error = false;
        scope.send = function () {
          var htmlBody = '<div>Name: ' + scope.user.name + '</div>' +
          '<div>Email: ' + scope.user.email + '</div>' +
          '<div>Message: ' + scope.user.body + '</div>' +
          '<div>Date: ' + (new Date()).toString() + '</div>';
        }; // send
      } // link
    };
  }]);
