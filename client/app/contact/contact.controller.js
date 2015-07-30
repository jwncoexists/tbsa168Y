'use strict';

var app = angular.module('tbsa168App');

app.controller('ContactCtrl', ['Auth',
  function (Auth){
    var self = this;
    self.isLoggedIn = Auth.isLoggedIn;
}]);
