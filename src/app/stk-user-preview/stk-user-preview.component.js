(function (angular) {
  'use strict';

  angular.module('app').component('stkUserPreview', {
    templateUrl: 'app/stk-user-preview/stk-user-preview.component.html',
    controller: userPreviewController,
    bindings: {
      userLogin: '<'
    }
  });

  /** @ngInject  */
  function userPreviewController(userService) {
    var vm = this;

    vm.$onInit = function () {
      // setUserDetails(this.userLogin);
      /* eslint-disable camelcase */
      vm.user = {
        login: 'pedritomelenas',
        id: 9551023,
        avatar_url: 'https://avatars0.githubusercontent.com/u/9551023?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/pedritomelenas',
        html_url: 'https://github.com/pedritomelenas',
        followers_url: 'https://api.github.com/users/pedritomelenas/followers',
        following_url: 'https://api.github.com/users/pedritomelenas/following{/other_user}',
        gists_url: 'https://api.github.com/users/pedritomelenas/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/pedritomelenas/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/pedritomelenas/subscriptions',
        organizations_url: 'https://api.github.com/users/pedritomelenas/orgs',
        repos_url: 'https://api.github.com/users/pedritomelenas/repos',
        events_url: 'https://api.github.com/users/pedritomelenas/events{/privacy}',
        received_events_url: 'https://api.github.com/users/pedritomelenas/received_events',
        type: 'User',
        site_admin: false,
        name: 'Pedro A. García-Sánchez',
        company: 'UGR',
        blog: 'http://www.ugr.es/local/pedro',
        location: 'Granada',
        email: null,
        hireable: null,
        bio: null,
        public_repos: 19,
        public_gists: 5,
        followers: 41,
        following: 2,
        created_at: '2014-11-04T11:02:24Z',
        updated_at: '2014-11-04T11:02:24Z'
      };
    };

    function setUserDetails(userLogin) {
      userService.getUser(userLogin)
        .then(onSuccess)
        .catch(onError);

      function onSuccess(res) {
        vm.user = res.data;
      }

      function onError() {

      }
    }
  }
})(angular);
