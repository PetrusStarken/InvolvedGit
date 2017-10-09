(function (angular) {
  'use strict';

  angular.module('app').component('stkPagination', {
    templateUrl: 'app/components/pagination/pagination.html',
    controller: paginationController,
    bindings: {
      pagination: '=',
      searchString: '@',
      searchFunction: '='
    }
  });

  /** @ngInject */
  function paginationController() {
    var vm = this;

    vm.search = search;
    vm.getPaginationClass = getPaginationClass;

    vm.$onInit = function () {
      initializePagination(this);

      function initializePagination(scope) {
        vm.searchFunction = scope.searchFunction;
        vm.searchString = scope.searchString;

        vm.pagination.pages = getPages(scope.pagination);
        vm.paginationInfoMessage = getPaginationInfoMessage(vm.pagination);
      }
    };

    function search(page) {
      vm.pagination.page = page;
      vm.pagination.pages = getPages(vm.pagination);
      vm.paginationInfoMessage = getPaginationInfoMessage(vm.pagination);

      vm.searchFunction(vm.searchString, vm.pagination);
    }

    function getPages(pagination) {
      var activePage = pagination.page;
      var lastPage = Math.ceil(pagination.totalItems / pagination.itemsPerPage);

      return {
        first: 1,
        previous: (activePage - 1),
        prevSecond: (activePage - 2),
        active: activePage,
        next: (activePage + 1),
        nextSecond: (activePage + 2),
        last: lastPage
      };
    }

    function getPaginationClass(pageNumber, allowHide) {
      var validPageNumber = (pageNumber > 0 && pageNumber <= vm.pagination.pages.last);
      var isActivePage = (pageNumber === vm.pagination.pages.active);

      if (isActivePage) {
        return 'disabled';
      }

      if (validPageNumber) {
        return 'waves-effect';
      }

      if (!validPageNumber && allowHide) {
        return 'hide';
      }

      if (!validPageNumber && !allowHide) {
        return 'disabled';
      }
    }

    function getPaginationInfoMessage(pagination) {
      var firstRecord = getFirstRecord(pagination);
      var lastRecord = getLastRecord(pagination);
      return 'Mostrando ' + firstRecord + ' a ' + lastRecord + ' de ' + pagination.totalItems;
    }

    function getFirstRecord(pagination) {
      var isFirstPage = pagination.pages.active === 1;

      if (isFirstPage) {
        return 1;
      }

      return ((pagination.pages.previous * pagination.itemsPerPage) + 1);
    }

    function getLastRecord(pagination) {
      var isLastPage = (pagination.pages.active === pagination.pages.last);

      if (isLastPage) {
        return pagination.totalItems;
      }

      return (pagination.pages.active * pagination.itemsPerPage);
    }
  }
})(angular);
