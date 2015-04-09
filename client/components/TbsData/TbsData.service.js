'use strict';

var app = angular.module('tbsa168App');

app.service('TbsData', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {

      // get the array of all persons
      getPersons: function(callback) {
        $http.get('/api/persons').success(function(data) {
          callback(data);
        });
      },

      // get one person
      getPerson: function(id, callback) {
        $http.get('/api/persons/' + id).success(function(data) {
          callback(data);
        });
      },

      // update a person
      updatePerson: function(person, callback) {
        $http.put('/api/persons/' + person._id, person).success(function(data) {
          callback(data);
        });
      }
    }
}]);
