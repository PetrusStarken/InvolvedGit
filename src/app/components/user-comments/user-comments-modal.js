(function (angular) {
  'use strict';

  angular.module('app').component('stkUserCommentsModal', {
    templateUrl: 'app/components/user-comments/user-comments-modal.html',
    controller: userCommentsModalController,
    bindings: {
      userId: '@',
      userLogin: '@'
    }
  });

  /** @ngIniject */
  function userCommentsModalController($toast, $localStorage) {
    var vm = this;

    vm.$onInit = function () {
      vm.comments = getStoragedComments(vm.userId);
    };

    vm.addComment = addComment;

    function addComment(comment) {
      var commentModel = {
        id: vm.comments.length,
        message: comment,
        login: vm.userLogin,
        createdAt: new Date()
      };
      vm.comments.push(commentModel);

      $toast.show('Comentário adicionado', 2000);

      delete vm.comment;
    }

    function getStoragedComments(userId) {
      var localStorage = $localStorage;

      var isUsersInitialized = (localStorage.users && true);
      if (!isUsersInitialized) {
        localStorage.users = [];
      }

      var isUserInitialized = localStorage.users.some(filterUserById);
      if (!isUserInitialized) {
        localStorage.users.push({
          id: userId,
          comments: []
        });
      }

      return localStorage.users.find(filterUserById).comments;
    }

    function filterUserById(user) {
      return user.id === vm.userId;
    }
  }
})(angular);
