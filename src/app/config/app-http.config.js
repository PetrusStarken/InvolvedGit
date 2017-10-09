(function (angular) {
  'use strict';

  angular.module('app').factory('editHttpInterceptors', EditHttpInterceptors);
  angular.module('app').config(ConfigHttpInterceptors);

  /** @ngInject */
  function EditHttpInterceptors($q, $rootScope) {
    return {
      request: function (config) {
        $rootScope.loading = true;
        return config || $q.when(config);
      },
      response: function (response) {
        $rootScope.loading = false;
        return response || $q.when(response);
      },
      responseError: function (response) {
        $rootScope.loading = false;
        return $q.reject(response);
      }
    };
  }

  /** @ngInject */
  function ConfigHttpInterceptors($httpProvider) {
    $httpProvider.interceptors.push('editHttpInterceptors');
  }
})(angular);
