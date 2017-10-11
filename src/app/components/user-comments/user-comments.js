(function (angular) {
  'use strict';

  angular.module('app').component('stkUserComments', {
    templateUrl: 'app/components/user-comments/user-comments.html',
    controller: userCommentsController,
    bindings: {
      login: '@userLogin'
    }
  });

  function userCommentsController($modal) {
    var vm = this;

    vm.$onInit = function () {

    };

    vm.openCommentsModal = function (login) {
      var modalInstance = $modal.open({
        templateUrl: 'app/components/user-comments/user-comments-modal.html',
        controller: userCommentsModalController,
        controllerAs: '$ctrl',
        resolve: {
          login: function () {
            return login;
          }
        }
      });
    };

    /** @ngIniject */
    function userCommentsModalController($scope, $toast, login) {
      var vm = this;

      vm.login = login;
      vm.comments = [];

      vm.addComment = addComment;

      function addComment(comment) {
        var commentModel = {
          id: vm.comments.length,
          message: comment,
          login: vm.login,
          createdDate: new Date()
        };
        vm.comments.push(commentModel);

        $toast.show('Comentário adicionado', 5000);

        delete vm.comment;
      }
    }
  }

})(angular);
