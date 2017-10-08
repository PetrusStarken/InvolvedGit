(function (angular) {
  'use strict';

  angular.module('app').component('stkHome', {
    templateUrl: 'app/stk-home/stk-home.component.html',
    controller: homeController
  });

  /** @ngInject */
  function homeController(userService) {
    var vm = this;

    vm.searchOnGit = searchOnGit;

    function searchOnGit(searchString) {
      userService.getUsers(searchString).then(function (res) {
        vm.usersCount = res.data.total_count;
        vm.users = res.data.items;
      });
    }
  }
})(angular);
