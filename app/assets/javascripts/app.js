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
          controller: 'AccountController',
          resolve: {
            accountPromise: ['account', function(account) {
              if (!account.loaded) {      // only request account.json from the server if it's not loaded yet
                return account.getFromServer();
              }
              else {
                return true;
              }
            }]
          }
        })
        .state('newIncome', {
          url: '/income',
          templateUrl: 'account/_new_income.html',
          controller: 'AccountController',
          params: {
            income: true
          }
        })
        .state('newExpense', {
          url: '/expense',
          templateUrl: 'account/_new_expense.html',
          controller: 'AccountController',
          params: {
            income: false
          }
        });
      $urlRouterProvider.otherwise('account');
    }]);
