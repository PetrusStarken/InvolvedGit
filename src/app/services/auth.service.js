(function (angular) {
  'use strict';

  angular.module('app').factory('authService', authService);

  /** @ngInject */
  function authService($firebaseAuth) {
    var service = {
      signInGitHub: _signInGitHub
    };

    return service;

    function _signInGitHub() {
      return $firebaseAuth().$signInWithPopup('github');
    }
  }
})(angular);
