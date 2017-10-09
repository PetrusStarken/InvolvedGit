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

    function searchOnGit(searchString) {
      if (!searchString) {
        return;
      }

      userService.getUsers(searchString).then(function (res) {
        vm.notFound = (!res.data.total_count);
        vm.usersCount = res.data.total_count;
        vm.users = res.data.items;
      });
    }
  }
})(angular);