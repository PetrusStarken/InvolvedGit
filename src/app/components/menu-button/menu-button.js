(function (angular) {
  'use strict';

  angular.module('app').component('stkMenuButton', {
    templateUrl: 'app/components/menu-button/menu-button.html',
    transclude: true,
    bindings: {
      url: '@'
    }
  });
})(angular);
