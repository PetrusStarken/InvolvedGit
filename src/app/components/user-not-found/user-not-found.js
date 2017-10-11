(function (angular) {
  'use strict';

  angular.module('app').component('stkUserNotFound', {
    templateUrl: 'app/components/user-not-found/user-not-found.html',
    transclude: true,
    bindings: {
      showError: '<'
    }
  });
})(angular);
