(function (angular) {
  'use strict';

  angular.module('app').component('stkUserRepositories', {
    templateUrl: 'app/stk-user-repositories/stk-user-repositories.component.html',
    controller: userDetailsController
  });

  /** @ngInject */
  function userDetailsController($stateParams, repositoryService) {
    var vm = this;

    vm.userLogin = $stateParams.login;

    /* eslint-disable camelcase, quote-props, indent, key-spacing */
    vm.$onInit = function () {
      // setUserDetails($stateParams.login);
      // setUserRepositories($stateParams.login);

      vm.repositories = [
        {
           'id': 33193003,
           'name':' Curso-LaTeX-AMAT',
           'full_name':'pedritomelenas/Curso-LaTeX-AMAT',
           'owner':{
              'login':'pedritomelenas',
              'id':9551023,
              'avatar_url':'https://avatars0.githubusercontent.com/u/9551023?v=4',
              'gravatar_id':'',
              'url':'https://api.github.com/users/pedritomelenas',
              'html_url':'https://github.com/pedritomelenas',
              'followers_url':'https://api.github.com/users/pedritomelenas/followers',
              'following_url':'https://api.github.com/users/pedritomelenas/following{/other_user}',
              'gists_url':'https://api.github.com/users/pedritomelenas/gists{/gist_id}',
              'starred_url':'https://api.github.com/users/pedritomelenas/starred{/owner}{/repo}',
              'subscriptions_url':'https://api.github.com/users/pedritomelenas/subscriptions',
              'organizations_url':'https://api.github.com/users/pedritomelenas/orgs',
              'repos_url':'https://api.github.com/users/pedritomelenas/repos',
              'events_url':'https://api.github.com/users/pedritomelenas/events{/privacy}',
              'received_events_url':'https://api.github.com/users/pedritomelenas/received_events',
              'type':'User',
              'site_admin':false
           },
           'private':false,
           'html_url':'https://github.com/pedritomelenas/Curso-LaTeX-AMAT',
           'description':'Curso de LaTeX organizado por AMAT para alumnos de Trabajo de Fin de Grado',
           'fork':false,
           'url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT',
           'forks_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/forks',
           'keys_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/keys{/key_id}',
           'collaborators_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/collaborators{/collaborator}',
           'teams_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/teams',
           'hooks_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/hooks',
           'issue_events_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/issues/events{/number}',
           'events_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/events',
           'assignees_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/assignees{/user}',
           'branches_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/branches{/branch}',
           'tags_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/tags',
           'blobs_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/git/blobs{/sha}',
           'git_tags_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/git/tags{/sha}',
           'git_refs_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/git/refs{/sha}',
           'trees_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/git/trees{/sha}',
           'statuses_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/statuses/{sha}',
           'languages_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/languages',
           'stargazers_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/stargazers',
           'contributors_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/contributors',
           'subscribers_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/subscribers',
           'subscription_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/subscription',
           'commits_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/commits{/sha}',
           'git_commits_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/git/commits{/sha}',
           'comments_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/comments{/number}',
           'issue_comment_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/issues/comments{/number}',
           'contents_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/contents/{+path}',
           'compare_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/compare/{base}...{head}',
           'merges_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/merges',
           'archive_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/{archive_format}{/ref}',
           'downloads_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/downloads',
           'issues_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/issues{/number}',
           'pulls_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/pulls{/number}',
           'milestones_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/milestones{/number}',
           'notifications_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/notifications{?since,all,participating}',
           'labels_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/labels{/name}',
           'releases_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/releases{/id}',
           'deployments_url':'https://api.github.com/repos/pedritomelenas/Curso-LaTeX-AMAT/deployments',
           'created_at':'2015-03-31T15:23:09Z',
           'updated_at':'2017-07-18T07:39:00Z',
           'pushed_at':'2017-05-04T16:31:57Z',
           'git_url':'git://github.com/pedritomelenas/Curso-LaTeX-AMAT.git',
           'ssh_url':'git@github.com:pedritomelenas/Curso-LaTeX-AMAT.git',
           'clone_url':'https://github.com/pedritomelenas/Curso-LaTeX-AMAT.git',
           'svn_url':'https://github.com/pedritomelenas/Curso-LaTeX-AMAT',
           'homepage':null,
           'size':3854,
           'stargazers_count':20,
           'watchers_count':20,
           'language':'PostScript',
           'has_issues':true,
           'has_projects':true,
           'has_downloads':true,
           'has_wiki':true,
           'has_pages':false,
           'forks_count':8,
           'mirror_url':null,
           'open_issues_count':0,
           'forks':8,
           'open_issues':0,
           'watchers':20,
           'default_branch':'master',
           'score':1
        }
     ];
    };

    function setUserRepositories(login) {
      repositoryService.getRepositories(login)
        .then(onSuccess)
        .catch(onError);

      function onSuccess(res) {
        res.repositories = res.data.items;
        res.totalRepositories = res.data.total_count;
      }

      function onError() {
        // TODO: catch exception globally
      }
    }
  }
})(angular);
