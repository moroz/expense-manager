angular.module('MeiQian')
  .controller('AccountController', ['account', '$state', '$scope', function(account, $state, $scope) {
    $scope.name = "Hello World";
    $scope.account = account;
    $scope.income = $state.params.income;
    $scope.submitEntry = function() {
      if (!$scope.entry_amount || !$scope.entry_description || $scope.entry_amount === '' || $scope.entry_description === '') { return; }
      amount = parseFloat($scope.entry_amount);
      if (!$scope.income) {
        amount = -amount;
      }
      account.entries.push({
        id: 0,
        amount: amount,
        description: $scope.entry_description
      });
      $state.go('account');
    };

  }]);
