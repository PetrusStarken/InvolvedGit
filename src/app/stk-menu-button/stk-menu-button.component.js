(function (angular) {
  'use strict';

  angular.module('app').component('stkMenuButton', {
    templateUrl: 'app/stk-menu-button/stk-menu-button.component.html',
    transclude: true,
    bindings: {
      url: '@'
    }
  });
})(angular);
