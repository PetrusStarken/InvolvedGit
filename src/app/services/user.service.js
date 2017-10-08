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
    function _getUsers(userName, page) {
      var params = {
        q: userName + ' in:fullname:login',
        type: 'users',
        page: page,
        per_page: 12
      };
      return $http.get(config.githubApiUrl + 'search/users', {params: params, cache: true});
    }

    function _getUser(userName) {
      return $http.get(config.githubApiUrl + 'users/' + userName, {cache: true});
    }
  }
})(angular);
