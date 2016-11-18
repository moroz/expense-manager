angular.module('MeiQian')
  .controller('AccountController', ['$scope', function($scope) {
    $scope.name = "Hello World";
    $scope.account = {
      entries: [
        {id: 1, amount: 2.50, description: "Papkens"},
        {id: 10, amount: 15, description: "Dupa"}
      ],
      sum: function() {
        return this.entries.map(function(entry) {
          return entry.amount;
        }).reduce(function(a,b) {
          return a + b;
        });
      }
    };
  }]);
