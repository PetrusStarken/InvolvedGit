(function (angular) {
  'use strict';

  angular.module('app').component('pageHome', {
    templateUrl: 'app/pages/home/home.html',
    controller: homeController
  });

  /** @ngInject */
  function homeController(userService) {
    var vm = this;

    vm.searchOnGit = searchOnGit;

    vm.$onInit = function () {
      vm.showPagination = false;
      vm.pagination = {
        page: 1,
        itemsPerPage: 9,
        totalItems: 0
      };
    };

    function searchOnGit(searchString, pagination) {
      if (!searchString) {
        return;
      }

      userService.getUsers(searchString, pagination).then(function (res) {
        var userNotFound = (!res.data.total_count);
        vm.notFound = userNotFound;

        if (userNotFound) {
          delete vm.users;
          vm.showPagination = false;
          return;
        }

        vm.pagination.totalItems = res.data.total_count;
        vm.users = res.data.items;

        vm.showPagination = true;
      });
    }
  }
})(angular);
