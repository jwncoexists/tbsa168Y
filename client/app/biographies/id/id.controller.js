'use strict';

angular.module('tbsa168App')
  .controller('BiographiesIdCtrl', ['$scope', 'Auth', 'TbsData', '$stateParams', '$location',
    function ($scope, Auth, TbsData, $stateParams, $location)  {
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.person = {};
      $scope.person._id = $stateParams.id;
      TbsData.getPerson($scope.person._id, function(data) {
        $scope.person.photo = data.photo;
        $scope.person.name = data.name;
        $scope.person.date = data.date;
        $scope.person.restingPlace = data.restingPlace;
        $scope.person.platoon = data.platoon;
        $scope.person.bioHtml = data.bioHtml;
        $scope.person.bio = data.bio;
        $scope.person.reflections = data.reflections.slice();
        $scope.person.bioPhoto  = data.bioPhoto;
        $scope.person.bioPhoto2  = data.bioPhoto2;
        $scope.person.pdf  = data.pdf;
      });
      $scope.submit = function() {
        TbsData.updatePerson($scope.person, function(data) {
          $scope.person = data;
          toastr.info( $scope.person.name + ' successfully updated.');
          $location.path('/biographies');
        });
        // $scope.person.$update().then(function(updatedPerson) {
        //   toastr.info( $scope.person.name + ' successfully updated.');
        //   $location.path('/fallen');
        // });
      };
      $scope.cancel = function() {
        $location.path('/biographies');
      };
      $scope.deleteReflection = function(person, reflection) {
        if (confirm('Are you sure you want to delete reflection for: ' +  //jshint ignore:line
            person.name + ' by: ' + reflection.by +'?')) {
          for (var i = 0; i < person.reflections.length; i++) {
            if (person.reflections[i]._id === reflection._id) {
              // remove the reflection
              person.reflections.splice(i, 1);
              // update the database
              // person.$update().then(function(updatedPerson) {
              //   toastr.info('Reflection for ' + person.name + ' has been deleted.');
              // });
              break;
            }  // if
          } // for
        } // if confirm
      }; // deleteReflection
  }]);
