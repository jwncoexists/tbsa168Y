'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData', '$location', 'fallenList', 'Person', '$modal', 'Modal', '$http',
  function ($scope, Auth, TbsData, $location, fallenList, Person, $modal, Modal, $http
  )  {
    var self = this;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.fallen = {};
    $scope.fallen.filterStr = '';
    $scope.displayFull = {};
    $scope.fallenList = fallenList;

    var minBioChars = 450;

    self.editPerson = function(id) {
      // go to the edit fallen form
      $location.path('/fallen/' + id);
    };
    // self.pdfLink = function(person) {
    //   return '/fallen/pdf/' + person._id;
    // };
    self.toggleMore = function(id) {
      $scope.displayFull[id] = !$scope.displayFull[id];
    };
    self.showMoreLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto || person.reflections.length > 0) &&
             (!$scope.displayFull[person._id]));
    };
    self.showLessLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto || person.reflections.length > 0) &&
             ($scope.displayFull[person._id] === true));
    };
    self.showReflectionLink = function() {
      // show reflection link if text has been expanded
      // return ($scope.displayFull[person._id] === true || person.bioHtml.length <= minBioChars);
      // always show the add reflection link
      return true;
    };
    self.filterList = function(person) {
      // only list deceased
      if (person.living) {
        return false;
      }
      // if no filter, return true
      if (!$scope.fallen.filterStr || $scope.fallen.filterStr === '') {
        return true;
      }
      var filter = $scope.fallen.filterStr.toLowerCase(),
          platoon1 = person.platoon.toLowerCase(),
          platoon2 = platoon1 + ' platoon',
          name = person.name.toLowerCase(),
          resting = person.restingPlace.toLowerCase();

      if ((name.indexOf(filter) > -1) ||
         (platoon1.indexOf(filter) > -1) ||
         (platoon2.indexOf(filter) > -1) ||
         (resting.indexOf(filter) > -1))   {
           return true;
      } else {
        return false;
      }
    };

    self.getBio = function(person) {
      if ($scope.displayFull[person._id]) {
        return person.bioHtml;
      }
      else {
        // shorten bio and strip out HTML tags so won't mess up display
        var shortenedBio = person.bioHtml.slice(0,minBioChars);
        var strippedBio = shortenedBio.replace(/(<([^>]+)>)/ig,'');
        strippedBio = strippedBio.replace(/[<>\/]/ig,'');
        // strippedBio = strippedBio.replace(/>/ig,'');
        return strippedBio;
      }
    };

    self.open = function (person) {
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

        $http.post('api/emails',
          {
            sender: 'jwncoexists@gmail.com',
            subject: 'New TBSA-1-68 Reflection added to: ' + person.name,
            msg: 'User: '+ $scope.currentUser.email + ', Reflection from: ' +
            person.reflections[person.reflections.length-1].by + ': ' +
              person.reflections[person.reflections.length-1].reflection
          }).success(function() {
          }).error(function() {
          });
        Person.query().$promise.then(function(updatedPersons) {
          $scope.fallenList = updatedPersons;
          $scope.displayFull[person._id] = true;
        });
      });
    };

    // $scope.showPdf = function(person) {
    //   // go to the edit fallen form
    //   $location.path('/fallen/pdf/' + person._id);
    // };

  self.showPdf= function(person) {
      window.open(person.pdf, person.name, 'width=600, height=800');
      toastr.info('Downloadable & Printable Bio opened in a separate browser window.');
    };

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
