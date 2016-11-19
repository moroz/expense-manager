angular.module('MeiQian')
  .controller('AccountController', ['account', '$state', '$scope', function(account, $state, $scope) {
    $scope.account = account;
    $scope.income = $state.params.income;
    $scope.submitEntry = function() {
      if (!$scope.entry_amount || !$scope.entry_description || $scope.entry_amount === '' || $scope.entry_description === '') { return; }
      amount = parseFloat($scope.entry_amount);
      if (!$scope.income) {
        amount = -amount;
      }
      account.addEntry($scope.entry_description, amount)
        .success(function(entry) {
          account.entries.push(entry);
          account.balance = account.sum();
        });
      $state.go('account');
    };

  }]);
