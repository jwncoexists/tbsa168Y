'use strict';

var app = angular.module('tbsa168App');

app.service('TbsData', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {

      // get the array of all groups
      getPersons: function(callback) {
        $http.get('/api/persons').success(function(data) {
          callback(data);
        });
      }
    }
}]);
