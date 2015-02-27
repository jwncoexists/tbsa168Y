'use strict';

angular.module('tbsa168App')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // update login count
          Auth.incrementLoginCnt();
          // Logged in, redirect to home
          $location.path('/');
          toastr.info('Welcome to the TBS A-1-68 Reunion Members-Only Area.');
        })
        .catch( function(err) {
          $location.path('/login');
          $scope.errors.other = err.message;
          toastr.error(err.message + " Verify login information and try again. Click 'Contact' on the menu to send us a message if you continue having problems.");
        });
      }
    };

  });
