(function (angular) {
  'use strict';

  angular.module('app').component('stkLogin', {
    templateUrl: 'app/components/login/login.html',
    controller: loginController
  });

  /** @ngInject */
  function loginController(authService) {
    var vm = this;

    vm.login = login;

    function login() {
      // login with Facebook
      authService.signInGitHub().then(function (res) {
        console.log('Signed in as:', res.user.displayName);
      }).catch(function (error) {
        console.log('Authentication failed:', error);
      });
    }
  }
})(angular);
