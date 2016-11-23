angular.module('MeiQian', ['ui.router', 'templates', 'Devise'])
  .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthController',
        })
        .state('account', {
          url: '/account',
          templateUrl: 'account/_account.html',
          controller: 'AccountController',
          resolve: {
            authenticate: authenticate,
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
        });
      $urlRouterProvider.otherwise('account');

      function authenticate($q, Auth, $state, $timeout) {
        if (Auth.isAuthenticated()) {
          return $q.when();
        }
        else {
          $timeout(function() {
            $state.go('login');
          });
        }
      }
    }]);
