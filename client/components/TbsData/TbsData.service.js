'use strict';

// angular.module(__filename, [
//
// ])
// module.exports = __filename
// browserify
// ngAnnotate

var app = angular.module('tbsa168App');

app.factory('Person', ['$resource', function ($resource) {
    return $resource('/api/persons/:_id', {_id:'@_id'}, {
      'query':  {method:'GET', isArray:true},
      'get':    {method:'GET'},
      'update':   {method:'PUT'}
    });
}]);

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
    };
}]);
