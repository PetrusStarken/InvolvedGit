(function (angular) {
  'use strict';

  angular.module('app').component('stkHeader', {
    templateUrl: 'app/components/header/header.html',
    controller: headerController
  });

  /** @ngInject */
  function headerController() {
    var vm = this;

    vm.showHideMobileMenu = showHideMobileMenu;

    function showHideMobileMenu() {
      vm.showMobileMenu = !vm.showMobileMenu;
    }
  }
})(angular);
