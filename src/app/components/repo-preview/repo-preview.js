(function (angular) {
  'use strict';

  angular.module('app').component('stkRepoPreview', {
    templateUrl: 'app/components/repo-preview/repo-preview.html',
    bindings: {
      repo: '='
    }
  });
})(angular);
