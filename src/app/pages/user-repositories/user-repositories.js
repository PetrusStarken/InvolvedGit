(function (angular) {
  'use strict';

  angular.module('app').component('pageUserRepositories', {
    templateUrl: 'app/pages/user-repositories/user-repositories.html',
    controller: userDetailsController
  });

  /** @ngInject */
  function userDetailsController($stateParams, repositoryService) {
    var vm = this;

    vm.setUserRepositories = setUserRepositories;

    vm.$onInit = function () {
      vm.userLogin = $stateParams.login;
      vm.pagination = {
        page: 1,
        itemsPerPage: 5,
        totalItems: 0
      };

      setUserRepositories(vm.userLogin, vm.pagination);
    };

    function setUserRepositories(login, pagination) {
      repositoryService.getRepositories(login, pagination)
        .then(onSuccess)
        .catch(onError);

      function onSuccess(res) {
        vm.pagination.totalItems = res.data.total_count;
        vm.repositories = res.data.items;
      }

      function onError() {
        // TODO: catch exception globally
      }
    }
  }
})(angular);
