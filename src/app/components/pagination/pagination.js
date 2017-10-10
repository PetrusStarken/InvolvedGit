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

        vm.pages = getPages(scope.pagination);
        vm.paginationInfoMessage = getPaginationInfoMessage(vm.pages, vm.pagination);
        vm.showPagination = showPagination(vm.pages.last);
      }
    };

    function search(page) {
      vm.pagination.page = page;
      vm.pages = getPages(vm.pagination);
      vm.paginationInfoMessage = getPaginationInfoMessage(vm.pages, vm.pagination);
      vm.showPagination = showPagination(vm.pages.last);

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
      var validPageNumber = (pageNumber > 0 && pageNumber <= vm.pages.last);
      var isActivePage = (pageNumber === vm.pages.active);

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

    function getPaginationInfoMessage(pages, pagination) {
      var firstRecord = getFirstRecord(pages, pagination.itemsPerPage);
      var lastRecord = getLastRecord(pages, pagination);
      return 'Mostrando ' + firstRecord + ' a ' + lastRecord + ' de ' + pagination.totalItems;
    }

    function getFirstRecord(pages, itemsPerPage) {
      var isFirstPage = pages.active === 1;

      if (isFirstPage) {
        return 1;
      }

      return ((pages.previous * itemsPerPage) + 1);
    }

    function getLastRecord(pages, pagination) {
      var isLastPage = (pages.active === pages.last);

      if (!isLastPage) {
        return (pages.active * pagination.itemsPerPage);
      }

      var totalItems = (pages.last * pagination.itemsPerPage);

      if (totalItems > pagination.totalItems) {
        return pagination.totalItems;
      }

      return totalItems;
    }

    function showPagination(lastPage) {
      return (lastPage > 1);
    }
  }
})(angular);
