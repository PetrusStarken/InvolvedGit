(function (angular) {
  'use strict';

  angular.module('app').component('stkRepoPreview', {
    templateUrl: 'app/stk-repo-preview/stk-repo-preview.component.html',
    bindings: {
      repo: '='
    }
  });
})(angular);
