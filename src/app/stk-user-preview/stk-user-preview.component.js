(function (angular) {
  'use strict';

  angular.module('app').component('stkUserPreview', {
    templateUrl: 'app/stk-user-preview/stk-user-preview.component.html',
    controller: userPreviewController,
    bindings: {
      userLogin: '<',
      isDetails: '=',
      isList: '=',
      colClass: '@'
    }
  });

  /** @ngInject  */
  function userPreviewController(userService) {
    var vm = this;

    vm.$onInit = function () {
      setUserDetails(this.userLogin);
    };

    function setUserDetails(userLogin) {
      userService.getUser(userLogin)
        .then(onSuccess)
        .catch(onError);

      function onSuccess(res) {
        vm.user = res.data;
      }

      function onError() {

      }
    }
  }
})(angular);
