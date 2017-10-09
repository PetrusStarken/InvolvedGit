angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'stkHome'
    })
    .state('challenge', {
      url: '/challenge',
      component: 'stkChallenge'
    })
    .state('userRepositories', {
      url: '/git/:login',
      component: 'stkUserRepositories'
    });
}
