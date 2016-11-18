angular.module('MeiQian')
  .controller('AccountController', ['account', '$scope', function(account, $scope) {
    $scope.name = "Hello World";
    $scope.account = account;
  }]);
