(function (angular) {
  'use strict';

  angular.module('app').component('pageUserRepositories', {
    templateUrl: 'app/pages/user-repositories/user-repositories.html',
    controller: userDetailsController
  });

  /** @ngInject */
  function userDetailsController($stateParams, repositoryService, userService) {
    var vm = this;

    vm.setUserRepositories = setUserRepositories;

    vm.$onInit = function () {
      vm.userLogin = $stateParams.login;

      checkIfUserExists(vm.userLogin).then(function (res) {
        vm.userFound = (res.data.total_count > 0);

        if (!vm.userFound) {
          return;
        }

        vm.pagination = {
          page: 1,
          itemsPerPage: 5,
          totalItems: 0
        };

        setUserRepositories(vm.userLogin, vm.pagination);
      });
    };

    function setUserRepositories(login, pagination) {
      repositoryService.getRepositories(login, pagination)
        .then(onSuccess);

      function onSuccess(res) {
        vm.pagination.totalItems = res.data.total_count;
        vm.repositories = res.data.items;
        vm.showPagination = true;
      }
    }

    function checkIfUserExists(userLogin) {
      var emptyPagination = {};
      return userService.getUsers(userLogin, emptyPagination);
    }
  }
})(angular);
