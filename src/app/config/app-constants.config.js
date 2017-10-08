(function (angular) {
  'use strict';

  var config = {
    githubApiUrl: 'https://api.github.com/'
  };

  angular.module('app').constant('config', config);
})(angular);
