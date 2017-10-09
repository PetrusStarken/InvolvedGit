(function (angular) {
  'use strict';

  angular.module('app').component('pageUserRepositories', {
    templateUrl: 'app/pages/user-repositories/user-repositories.html',
    controller: userDetailsController
  });

  /** @ngInject */
  function userDetailsController($stateParams, repositoryService) {
    var vm = this;

    vm.userLogin = $stateParams.login;

    vm.$onInit = function () {
      setUserRepositories($stateParams.login);
    };

    function setUserRepositories(login) {
      repositoryService.getRepositories(login)
        .then(onSuccess)
        .catch(onError);

      function onSuccess(res) {
        vm.repositories = res.data.items;
        vm.totalRepositories = res.data.total_count;
      }

      function onError() {
        // TODO: catch exception globally
      }
    }
  }
})(angular);
