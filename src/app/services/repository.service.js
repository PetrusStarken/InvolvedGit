(function (angular) {
  'use strict';

  angular.module('app').factory('repositoryService', repositoryService);

  /** @ngInject */
  function repositoryService($http, config) {
    var service = {
      getRepositories: _getRepositories,
      getRepository: _getRepository
    };

    return service;

    /* eslint-disable camelcase */
    function _getRepositories(userName, pagination) {
      var params = {
        q: 'user:' + userName,
        page: pagination.page || 1,
        per_page: pagination.itemsPerPage
      };
      return $http.get(config.githubApiUrl + 'search/repositories', {params: params, cache: true});
    }

    function _getRepository(userName) {
      return $http.get(config.githubApiUrl + 'users/' + userName, {cache: true});
    }
  }
})(angular);
