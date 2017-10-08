(function (angular) {
  'use strict';

  angular.module('app').component('stkUsersList', {
    templateUrl: 'app/stk-users-list/stk-users-list.component.html',
    bindings: {
      users: '='
    }
  });
})(angular);
