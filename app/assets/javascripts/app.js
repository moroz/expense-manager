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
              return account.getFromServer();
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
        .state('viewEntry', {
          url: '/entries/:id',
          controller: 'EntryViewController',
          templateUrl: 'entries/_entry.html'
        })
        .state('editEntry', {
          url: '/entries/:id/edit',
          controller: 'EntryUpdateController',
          templateUrl: 'entries/_edit_entry.html'
        });
      $urlRouterProvider.otherwise('account');
    }]);
