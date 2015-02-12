'use strict';

angular.module('tbsa168App')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu =
    [{
      'title': 'Home',
      'link': '/',
      'membersOnly': false
    },
    {
      'title': 'Photos',
      'link': '/photos',
      'membersOnly': true
    },
    {
      'title': 'Newsletters',
      'link': '/newsletters',
      'membersOnly': true
    },
    {
      'title': 'Locate Classmates',
      'link': 'https://public.tableausoftware.com/views/TBSA1-68_0/TBSA1-68?:showVizHome=no#1',
      'membersOnly': true
    },
    {
      'title': 'For our Fallen',
      'link': '/fallen',
      'membersOnly': true
    },
  {
    'title': 'Contact',
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
