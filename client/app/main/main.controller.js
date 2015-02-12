'use strict';

var app = angular.module('tbsa168App');

app.controller('MainCtrl', ['$scope', 'Auth',
  function ($scope, Auth)  {
      $scope.isLoggedIn = Auth.isLoggedIn;
    // $scope.awesomeThings = [];
    //
    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });
    //
    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };
    //
    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
    //
    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
}]);
