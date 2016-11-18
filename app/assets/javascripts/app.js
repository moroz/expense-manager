angular.module('MeiQian', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainController'
      });
      $urlRouterProvider.otherwise('home');
    }]);
