'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData', '$location', 'fallenList', 'Person', '$modal', 'Modal',
  function ($scope, Auth, TbsData, $location, fallenList, Person, $modal, Modal
  )  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.fallen = {};
    $scope.fallen.filterStr = "";
    $scope.displayFull = {};
    $scope.fallenList = fallenList;

    var minBioChars = 450;

    $scope.editPerson = function(id) {
      // go to the edit fallen form
      $location.path('/fallen/' + id);
    }
    $scope.toggleMore = function(id) {
      $scope.displayFull[id] = !$scope.displayFull[id];
    }
    $scope.showMoreLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto || person.reflections.length > 0) &&
             (!$scope.displayFull[person._id]));
    }
    $scope.showLessLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto || person.reflections.length > 0) &&
             ($scope.displayFull[person._id] === true));
    }
    $scope.showReflectionLink = function(person) {
      // show reflection link if text has been expanded
      return ($scope.displayFull[person._id] === true);
    }
    $scope.filterList = function(person) {
      if (!$scope.fallen.filterStr || $scope.fallen.filterStr === "") {
        return true;
      }
      var filter = $scope.fallen.filterStr.toLowerCase();
      var platoon1 = person.platoon.toLowerCase();
      var platoon2 = platoon1 + " platoon";
      var name = person.name.toLowerCase();
      var resting = person.restingPlace.toLowerCase();
      if ((name.indexOf(filter) > -1) ||
         (platoon1.indexOf(filter) > -1) ||
         (platoon2.indexOf(filter) > -1) ||
         (resting.indexOf(filter) > -1))   {
           return true;
      } else {
        return false;
      }
    }
    $scope.getBio = function(person) {
      if ($scope.displayFull[person._id] || person.bioHtml.length <= minBioChars) {
        return person.bioHtml;
      } else {
        // shorten bio and strip out HTML tags so won't mess up display
        var shortenedBio = person.bioHtml.slice(0,minBioChars);
        var strippedBio = shortenedBio.replace(/(<([^>]+)>)/ig,"");
        strippedBio = strippedBio.replace(/[<>\/]/ig,"");
        // strippedBio = strippedBio.replace(/>/ig,"");
        return strippedBio;
      }
    }
    $scope.open = function (person) {

      $modal.open({
        templateUrl: 'app/fallen/modaltemplate.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          person: function() {
            return person;
          }
        }
      }).result.then(function() {
        Person.query().$promise.then(function(updatedPersons) {
          $scope.fallenList = updatedPersons;
          $scope.displayFull[person._id] = true;

        })
      });
    };

    $scope.deleteReflection = function(person, reflection) {
      console.log('deleteReflection', person, reflection);
      if (confirm('Are you sure you want to delete reflection for: ' +
          person.name + ' by: ' + reflection.by +'?')) {
        for (var i = 0; i < person.reflections.length; i++) {
          if (person.reflections[i]._id === reflection._id) {
            // remove the reflection
            person.reflections.splice(i, 1);
            // update the database
            person.$update().then(function(updatedPerson) {
              // now update the person in the fallenList
              toastr.info('Reflection for ' + person.name + ' has been deleted.');
            });
            break;
          }  // if
        }; // for
      }; // if confirm
    }; // deleteReflection

}]);

// $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
app.controller('ModalInstanceCtrl', function ($scope, $modal, $modalInstance, person, Auth) {

  $scope.reflection = {
    body: '',
    by: ''
  };
  $scope.person = person;

  $scope.save = function () {
    debugger;
    person.reflections.push({user: Auth.getCurrentUser()._id, reflection: $scope.reflection.body, by: $scope.reflection.by});
    // Person.update({instance}, {queryParams})
    person.$update().then(function(updatedPerson) {
      $modalInstance.close(updatedPerson);
    });
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
