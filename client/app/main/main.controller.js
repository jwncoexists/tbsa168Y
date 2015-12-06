'use strict';

var app = angular.module('tbsa168App');

app.controller('MainCtrl', ['Auth',
  function (Auth)  {
    var self = this;
    self.isLoggedIn = Auth.isLoggedIn;
    self.clickOfficialSite = function() {
        window.open('http://tbs1-68usmc.com/index.html', 'Official TBS A1-68 Website', 'width=400, height=400');
        toastr.info('A1-68 Official Website opened in a separate browser window.');
      };

}]);
