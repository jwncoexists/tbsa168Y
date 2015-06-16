'use strict';

angular.module('tbsa168App')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu =
    [
    {
      'title': 'HOME',
      'link': '/',
      'state': 'main',
      'membersOnly': false
    },
    {
      'title': 'MAIN WEBSITE',
      'link': 'http://tbs1-68usmc.com/index.html',
      'membersOnly': false
    },
    {
      'title': 'PHOTOS',
      'link': '/photos',
      'state': 'photos',
      'membersOnly': true
    },
    {
      'title': 'NEWSLETTERS',
      'link': '/newsletters',
      'state': 'newsletters',
      'membersOnly': true
    },
    {
      'title': 'OUR FALLEN',
      'link': '/fallen',
      'state': 'fallen',
      'membersOnly': true
    },
    {
      'title': 'ROSTER',
      'link': '/roster',
      'state': 'roster',
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
      'state': 'contact',
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
