'use strict';

angular.module('tbsa168App')
  .directive('contactUs',  ['Auth', '$http', '$location',
  function (Auth, $http, $location) {
    return {
      templateUrl: 'components/contactUs/contactUs.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.isLoggedIn = Auth.userLoggedIn;
        scope.success = false;
        scope.error = false;
        scope.user = {
          name: "",
          email: "",
          body: ""
        };

        scope.sendMsg = function () {
          $http.post('api/emails',
            {
              recipient: 'jwncoexists@gmail.com',
              sender: scope.user.email,
              subject: 'TBS-A-1-68 Reunion Website Inquiry from ' + scope.user.name,
              msg: scope.user.body
            }).success(function(data) {
              scope.success = true;
              scope.error = false;
            }).error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              scope.success = false;
              scope.error = true;
            });
            toastr.info('Your message has been sent to the reunion committee!');
            $location.path('/');


          }; // sendMsg

      } // link
    };
  }]);
