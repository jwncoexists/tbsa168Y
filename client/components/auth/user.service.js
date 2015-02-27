'use strict';

angular.module('tbsa168App')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      updateLoginCnt: {
        method: 'PUT',
        params: {
          id: '@_id',
          controller:'logincnt'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
