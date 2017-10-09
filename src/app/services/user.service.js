(function (angular) {
  'use strict';

  angular.module('app').factory('userService', userService);

  /** @ngInject */
  function userService($http, config) {
    var service = {
      getUsers: _getUsers,
      getUser: _getUser
    };

    return service;

    /* eslint-disable camelcase */
    function _getUsers(userName, pagination) {
      var params = {
        q: userName + ' in:fullname:login',
        type: 'users',
        page: pagination.page || 1,
        per_page: pagination.itemsPerPage || 12
      };
      return $http.get(config.githubApiUrl + 'search/users', {params: params, cache: true});
    }

    function _getUser(userName) {
      return $http.get(config.githubApiUrl + 'users/' + userName, {cache: true});
    }
  }
})(angular);
