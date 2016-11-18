angular.module('MeiQian', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainController'
      })
      .state('account', {
        url: '/account',
        templateUrl: 'account/_account.html',
        controller: 'AccountController'
      });
      $urlRouterProvider.otherwise('account');
    }]);
