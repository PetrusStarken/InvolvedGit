(function (angular) {
  'use strict';

  angular.module('app').component('stkUserPreview', {
    templateUrl: 'app/components/user-preview/user-preview.html',
    controller: userPreviewController,
    bindings: {
      userLogin: '<',
      isDetails: '<',
      isList: '<',
      colClass: '@'
    }
  });

  /** @ngInject  */
  function userPreviewController(userService) {
    var vm = this;

    vm.$onInit = function () {
      setUserDetails(this);
    };

    function setUserDetails(ctrl) {
      userService.getUser(ctrl.userLogin)
        .then(onSuccess);

      function onSuccess(res) {
        vm.user = res.data;
      }
    }
  }
})(angular);
