angular.module('MeiQian', ['ui.router', 'templates', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('account', {
          url: '/account',
          templateUrl: 'account/_account.html',
          controller: 'AccountController',
          resolve: {
            accountPromise: ['account', function(account) {
              if (!account.loaded) {      // only request account.json from the server if it's not loaded yet
                return account.getFromServer();
              }
            }]
          }
        })
        .state('newExpense', {
          url: '/expense',
          controller: 'AccountController',
          templateUrl: 'account/_new_expense.html',
          data: { income: false }
        })
        .state('newIncome', {
          url: '/income',
          controller: 'AccountController',
          templateUrl: 'account/_new_income.html',
          data: { income: true }
        })
        .state('resourceDemo', {
          url: '/entries/:id',
          controller: 'EntriesController',
          templateUrl: 'entries/_entry.html',
        });
      $urlRouterProvider.otherwise('account');
    }]);
