'use strict';

var app = angular.module('tbsa168App');

app.controller('PhotosCtrl', ['$scope', 'Auth',
  function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.photos = [];
    $scope.galleryMode = true; // show gallery of photos to start

    // initialize values used to display person's name
    $scope.name = "";
    $scope.xmin = 0;
    $scope.xmax = 0;
    $scope.ymin = 0;
    $scope.ymax = 0;

    // initialize list of photos
    var item = {
      image: "/assets/images/photos/TBS A1-68 1st Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 1st Platoon-edited-thumb.jpg",
      name: "1st Platoon",
      regions: []
    };
    $scope.photos.push (item);
    item = {
      image: "/assets/images/photos/TBS A1-68 2nd Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 2nd Platoon-edited-thumb.jpg",
      name: "2nd Platoon",
      regions: [
        // row 1
        {
          name: "J. Ehmer",
          xmin: 75,
          width: 65,
          xmax: 141,
          ymin: 300,
          ymax: 520,
          height: 220,
          active: false
        },
        {
          name: "W. Friese",
          xmin: 142,
          xmax: 207,
          ymin: 300,
          ymax: 520,
          width: 65,
          height: 220,
          active: false
        },
        {
          name: "M. Fergus",
          xmin: 208,
          xmax: 270,
          ymin: 300,
          ymax: 520,
          width: 62,
          height: 220,
          active: false
        },
        {
          name: "C. Gibson",
          xmin: 271,
          xmax: 327,
          ymin: 300,
          ymax: 520,
          width: 56,
          height: 220,
          active: false
        },
        {
          name: "K. Dobbins",
          xmin: 328,
          xmax: 388,
          ymin: 300,
          ymax: 520,
          width: 60,
          height: 220,
          active: false
        },
        {
          name: "J. Gies",
          xmin: 389,
          xmax: 453,
          ymin: 300,
          ymax: 520,
          width: 64,
          height: 220,
          active: false
        },
        {
          name: "A. Gordon",
          xmin: 454,
          xmax: 505,
          ymin: 300,
          ymax: 520,
          width: 51,
          height: 220,
          active: false
        },
        {
          name: "J. Gettman",
          xmin: 505,
          xmax: 571,
          ymin: 300,
          ymax: 520,
          width: 66,
          height: 220,
          active: false
        },
        {
          name: "L. Fuch",
          xmin: 572,
          xmax: 635,
          ymin: 300,
          ymax: 520,
          width: 63,
          height: 220,
          active: false
        },
        {
          name: "J. Hansen",
          xmin: 636,
          xmax: 697,
          ymin: 300,
          ymax: 520,
          width: 61,
          height: 220,
          active: false
        },
        {
          name: "R. Dopher",
          xmin: 698,
          xmax: 754,
          ymin: 300,
          ymax: 520,
          width: 66,
          height: 220,
          active: false
        },
        // row 2
        {
          name: "Capt. McMahon",
          xmin: 35,
          xmax: 115,
          ymin: 230,
          ymax: 299,
          width: 80,
          height: 69,
          active: false
        },
        {
          name: "D. Ellis",
          xmin: 116,
          xmax: 180,
          ymin: 240,
          ymax: 299,
          width: 64,
          height: 59,
          active: false
        },
        {
          name: "P. Finneran",
          xmin: 181,
          xmax: 241,
          ymin: 240,
          ymax: 299,
          width: 60,
          height: 59,
          active: false
        },
        {
          name: "J. Feltner",
          xmin: 242,
          xmax: 300,
          ymin: 240,
          ymax: 299,
          width: 58,
          height: 59,
          active: false
        },
        {
          name: "J. Fogg",
          xmin: 301,
          xmax: 355,
          ymin: 240,
          ymax: 299,
          width: 54,
          height: 59,
          active: false
        },
        {
          name: "S. Easton",
          xmin: 356,
          xmax: 415,
          ymin: 240,
          ymax: 299,
          width: 59,
          height: 59,
          active: false
        },
        {
          name: "M. Delong",
          xmin: 416,
          xmax: 484,
          ymin: 240,
          ymax: 299,
          width: 68,
          height: 59,
          active: false
        },
        {
          name: "M. Evans",
          xmin: 485,
          xmax: 545,
          ymin: 240,
          ymax: 299,
          width: 60,
          height: 59,
          active: false
        },
        {
          name: "W. Etter",
          xmin: 546,
          xmax: 605,
          ymin: 240,
          ymax: 299,
          width: 59,
          height: 59,
          active: false
        },
        {
          name: "H. Cross",
          xmin: 606,
          xmax: 665,
          ymin: 240,
          ymax: 299,
          width: 59,
          height: 59,
          active: false
        },
        {
          name: "A. Gates",
          xmin: 666,
          xmax: 735,
          ymin: 240,
          ymax: 299,
          width: 69,
          height: 59,
          active: false
        },
        // row 3
        {
          name: "T. Deggend",
          xmin: 160,
          xmax: 201,
          ymin: 220,
          ymax: 275,
          width: 41,
          height: 55,
          active: false
        },
        {
          name: "S. Freiherr",
          xmin: 227,
          xmax: 259,
          ymin: 220,
          ymax: 275,
          width: 32,
          height: 55,
          active: false
        },
        {
          name: "K. Doyle",
          xmin: 282,
          xmax: 319,
          ymin: 220,
          ymax: 275,
          width: 37,
          height: 55,
          active: false
        },
        {
          name: "G. Getgood",
          xmin: 343,
          xmax: 375,
          ymin: 210,
          ymax: 275,
          width: 32,
          height: 65,
          active: false
        },
        {
          name: "W. Donnelly",
          xmin: 399,
          xmax: 434,
          ymin: 210,
          ymax: 275,
          width: 35,
          height: 65,
          active: false
        },
        {
          name: "C. Eisenbach",
          xmin: 466,
          xmax: 500,
          ymin: 210,
          ymax: 275,
          width: 34,
          height: 65,
          active: false
        },
        {
          name: "T. Hammett",
          xmin: 525,
          xmax: 556,
          ymin: 220,
          ymax: 275,
          width: 31,
          height: 55,
          active: false
        },
        {
          name: "D. Gee",
          xmin: 586,
          xmax: 620,
          ymin: 210,
          ymax: 275,
          width: 34,
          height: 65,
          active: false
        },
        {
          name: "W. Ganter",
          xmin: 648,
          xmax: 484,
          ymin: 210,
          ymax: 275,
          width: 34,
          height: 65,
          active: false
        },
        {
          name: "S. Hadar",
          xmin: 713,
          xmax: 767,
          ymin: 210,
          ymax: 275,
          width: 54,
          height: 65,
          active: false
        },
        // row 4
        {
          name: "P. Daigle",
          xmin: 125,
          xmax: 165,
          ymin: 190,
          ymax: 235,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: "A. Greishaber",
          xmin: 190,
          xmax: 232,
          ymin: 190,
          ymax: 235,
          width: 42,
          height: 45,
          active: false
        },
        {
          name: "F. Emmett",
          xmin: 250,
          xmax: 288,
          ymin: 190,
          ymax: 235,
          width: 38,
          height: 45,
          active: false
        },
        {
          name: "R. Cronin",
          xmin: 290,
          xmax: 330,
          ymin: 190,
          ymax: 235,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: "J. Foresman",
          xmin: 370,
          xmax: 403,
          ymin: 190,
          ymax: 235,
          width: 33,
          height: 45,
          active: false
        },
        {
          name: "R. Crew",
          xmin: 428,
          xmax: 462,
          ymin: 190,
          ymax: 235,
          width: 33,
          height: 45,
          active: false
        },
        {
          name: "R. Gleisberg",
          xmin: 489,
          xmax: 522,
          ymin: 190,
          ymax: 235,
          width: 33,
          height: 45,
          active: false
        },
        {
          name: "C. Davis",
          xmin: 545,
          xmax: 585,
          ymin: 190,
          ymax: 235,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: "A. DeCreane",
          xmin: 608,
          xmax: 650,
          ymin: 190,
          ymax: 235,
          width: 42,
          height: 45,
          active: false
        },
        {
          name: "F. Franzen",
          xmin: 675,
          xmax: 715,
          ymin: 190,
          ymax: 235,
          width: 40,
          height: 45,
          active: false
        },
        // row 5
        {
          name: "C. Greenfield",
          xmin: 330,
          xmax: 370,
          ymin: 170,
          ymax: 220,
          width: 40,
          height: 50,
          active: false
        },
        {
          name: "W. Dakin",
          xmin: 390,
          xmax: 420,
          ymin: 170,
          ymax: 220,
          width: 30,
          height: 50,
          active: false
        },
        {
          name: "J. Hagan",
          xmin: 450,
          xmax: 490,
          ymin: 170,
          ymax: 220,
          width: 40,
          height: 50,
          active: false
        },
        {
          name: "D. Eckenrode",
          xmin: 518,
          xmax: 553,
          ymin: 170,
          ymax: 220,
          width: 40,
          height: 50,
          active: false
        },
      ]
    };
    $scope.photos.push (item);
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 3rd Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 3rd Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "3rd Platoon",
      regions: []
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 4th Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 4th Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "4th Platoon",
      regions: []
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 5th Platoon-edited.jpg",
      thumb: "/assets/images/photos/TBS A1-68 5th Platoon-edited-thumb.jpg",
      info: "Quantico, VA",
      name: "5th Platoon",
      regions: []
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 Staff-1.jpg",
      thumb: "/assets/images/photos/TBS A1-68 Staff-1-thumb.jpg",
      info: "Quantico, VA",
      name: "Staff",
      regions: []
    });
    $scope.photos.push ({
      image: "/assets/images/photos/TBS A1-68 Staff-2.jpg",
      thumb: "/assets/images/photos/TBS A1-68 Staff-2-thumb.jpg",
      info: "Quantico, VA",
      name: "Staff",
      regions: []
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
    };
    $scope.getRegionStyle = function(region) {
      console.log('getting style for: ', region);
      var style = {
        'position': 'absolute',
        // 'display': 'inline',
        'top': region.ymin + 'px',
        'left': region.xmin + 'px',
        'width': region.width + 'px',
        'height': region.height + 'px',
        'color': 'yellow',

        'border': 'solid 1px black',
        'opacity': region.active == true ? 1 : 0,
        'font-size': '1em',
        'z-index': 500 };

      console.log('style =', style);
      return style;
    }
    $scope.setNameInfo = function(event) {
      console.log('entering setNameInfo: ', event);
      var regions = $scope.photos[$scope.clickedIndex].regions;
      var xpos = event.clientX;
      var ypos = event.clientY;
      var i = 0;
      var found = false;
      while (i < regions.length && !found) {
        if (xpos >= regions[i].xmin && xpos <= regions[i].xmax &&
            ypos >= regions[i].ymin && ypos <= regions[i].ymax) {
          name = regions[i].name;
        }
        i++
      };
      if (!found) { name = undefined };
      console.log('leaving setNameInfo, found =', found);
    }
    $scope.setRegionActive = function(region) {
      console.log('entering setRegionActive ', region);
      region.active = true;
    }
    $scope.setRegionInactive = function(region) {
      console.log('entering setRegionInactive ', region);
      region.active = false;
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
