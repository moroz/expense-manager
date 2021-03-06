angular.module('MeiQian')
  .controller('AccountController', ['account', '$state', '$scope', '$timeout',
    function(account, $state, $scope, $timeout) {
      $scope.account = account;
      $scope.submitEntry = function() {
        if (!$scope.entry_amount || !$scope.entry_description || $scope.entry_amount === '' || $scope.entry_description === '') { return; }
        amount = parseFloat($scope.entry_amount);
        if (!$state.current.data.income) {
          amount = -amount;
        }
        account.addEntry($scope.entry_description, amount)
          .success(function(entry) {
            account.entries.push(entry);
            account.balance = account.sum();
          });
        $state.go('account');
        $timeout(function() {
          window.scrollTo(0,document.body.scrollHeight);
        });
      };
      $scope.round = function(value) {
        return Math.round(parseFloat(value)*100)/100;
      };

    }]);
