'use strict';

angular.module('tbsa168App')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu =
    [
    {
      'title': 'HOME',
      'link': '/',
      'membersOnly': false
    },
    {
      'title': 'REGISTER FOR REUNION',
      'link': 'http://tbs1-68usmc.com/reunion-signup.html',
      'membersOnly': true
    },
    {
      'title': 'PHOTOS',
      'link': '/photos',
      'membersOnly': true
    },
    {
      'title': 'NEWSLETTERS',
      'link': '/newsletters',
      'membersOnly': true
    },
    {
      'title': 'OUR FALLEN',
      'link': '/fallen',
      'membersOnly': true
    },
    {
      'title': 'CLASSMATE MAP',
      'link': 'https://public.tableausoftware.com/views/TBSA1-68_0/TBSA1-68?:showVizHome=no#1',
      'membersOnly': true
    },

    {
      'title': 'CONTACT',
      'link': '/contact',
      'membersOnly': false
    }

    ];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
