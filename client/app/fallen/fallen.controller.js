'use strict';

var app = angular.module('tbsa168App');

app.controller('FallenCtrl', ['$scope', 'Auth', 'TbsData', '$location', 'Modal',
  function ($scope, Auth, TbsData, $location, Modal)  {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin= Auth.isAdmin;
    $scope.fallen = {};
    $scope.fallen.filterStr = "";
    $scope.displayFull = {};
    $scope.fallenList = [];
    var minBioChars = 450;
    TbsData.getPersons( function(data) {
      $scope.fallenList = data;
      // turn off full display for everyone to start
      for (var i=0; i < $scope.fallenList.length; i++) {
        $scope.displayFull[$scope.fallenList[i]._id] = false;
      }

    });
    $scope.editPerson = function(id) {
      // go to the edit fallen form
      $location.path('/fallen/' + id);
    }
    $scope.toggleMore = function(id) {
      $scope.displayFull[id] = !$scope.displayFull[id];
    }
    $scope.showMoreLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto) &&
             ($scope.displayFull[person._id] === false));
    }
    $scope.showLessLink = function(person) {
      return ((person.bioHtml.length > minBioChars || person.bioPhoto) &&
             ($scope.displayFull[person._id] === true));
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

    $scope.openModal = function(person) {
      Modal.add();
    }

}]);



app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size, person) {
    $scope.person = person;
    $scope.reflection = person.
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        person: function () {
          return $scope.person;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
