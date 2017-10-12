(function (angular) {
  'use strict';

  angular.module('app').component('stkUserComments', {
    templateUrl: 'app/components/user-comments/user-comments.html',
    controller: userCommentsController,
    bindings: {
      userId: '@',
      userLogin: '@'
    }
  });

  function userCommentsController($modal) {
    var vm = this;

    vm.openCommentsModal = function ($event, userId, userLogin) {
      var modalTemplate = '<stk-user-comments-modal user-id="' + userId + '" user-login="' + userLogin + '"></stk-user-comments-modal>';

      $modal.open({
        template: modalTemplate,
        anchorElement: $event ? angular.element($event.target) : undefined,
        resolve: {
          userId: function () {
            return userId;
          },
          userLogin: function () {
            return userLogin;
          }
        }
      });
    };
  }
})(angular);
