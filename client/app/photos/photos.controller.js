'use strict';

var app = angular.module('tbsa168App');

app.controller('PhotosCtrl', ['$scope', 'Auth',
  function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.photos = [];
    $scope.galleryMode = true;

    // initialize list of photos
    var item = {
      image: "/assets/images/photos/TBS A1-68 1st Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 1st Platoon-edited-thumb.jpg",
      name: "1st Platoon"
    };
    $scope.photos.push (item);
    item = {
      image: "/assets/images/photos/TBS A1-68 2nd Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 2nd Platoon-edited-thumb.jpg",
      name: "2nd Platoon"
    };
    $scope.photos.push (item);
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 3rd Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 3rd Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "3rd Platoon"
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 4th Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 4th Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "4th Platoon"
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 5th Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 5th Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "5th Platoon"
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 Staff-1.jpg",
      thumb: "/assets/images/photos/TBS A1-68 Staff-1-thumb.jpg",
      info: "Quantico, VA",
      name: "Staff"
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 Staff-2.jpg",
      thumb: "/assets/images/photos/TBS A1-68 Staff-2-thumb.jpg",
      info: "Quantico, VA",
      name: "Staff"
    });

    //
    $scope.clickGalleryImage = function (event, ind) {
      // set the x & y of the full-size-photo div for a nice animation
      console.log('clickGalleryImage event: ', event);
      var $pictureDiv = $(".animate-show-hide");
      var x = event.pageX;
      var y = Math.max(0, event.pageY - 100);
      $pictureDiv.css("transform-origin", x + "px " + y + "px");
      $scope.toggleGalleryMode(ind);
    };
    $scope.toggleGalleryMode = function (ind) {
      console.log('toggleGalleryMode ind: ', ind);
      $scope.galleryMode = !$scope.galleryMode;
      // if an index is passed in, set scope.clickedPhoto
      if (ind >= 0) {
        $scope.clickedPhoto = $scope.photos[ind];
        $scope.clickedIndex = ind;
      }
    };
    $scope.goToNext = function() {
      $scope.clickedIndex = ($scope.clickedIndex + 1) % $scope.photos.length;
      $scope.clickedPhoto = $scope.photos[$scope.clickedIndex];
    };
    $scope.goToPrevious = function() {
      $scope.clickedIndex = ($scope.clickedIndex == 0) ? $scope.photos.length : ($scope.clickedIndex - 1);
      $scope.clickedPhoto = $scope.photos[$scope.clickedIndex];
      console.log("goToPrevious, index = ", $scope.clickedIndex)
    }

}]);

app.animation('.animate-show-hide', function() {
  return {
    beforeAddClass : function(element, className, done) {
      if(className == 'ng-hide') {
        jQuery(element).animate({
          opacity:0
        }, done);
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className == 'ng-hide') {
        element.css('opacity',0);
        jQuery(element).animate({
          opacity:1
        }, done);
      }
      else {
        done();
      }
    }
  };
});
