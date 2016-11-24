angular.module('MeiQian')
.controller('EntryViewController', ['Entry', '$stateParams', '$http', '$state', '$scope', function(Entry, $stateParams, $http, $state, $scope) {
  $scope.entry = Entry.get({ id: $stateParams.id }, function() {});
  $scope.deleteEntry = function () {
    var id = $stateParams.id;
    $http.delete('/api/entries/' + id)
    .success(function() {
      $state.go('account');
    });
  };
}])
.controller('EntryUpdateController', ['Entry', '$state', '$stateParams', '$http', '$scope', function(Entry, $state, $stateParams, $http, $scope) {
  $scope.entry = Entry.get({ id: $stateParams.id }, function() {
    $scope.entry.amount = parseFloat($scope.entry.amount);
  });
  $scope.updateEntry = function() {
    var id = $stateParams.id;
    $http.put('/api/entries/' + id, {amount: $scope.entry.amount, description: $scope.entry.description})
    .success(function() {
      $state.go('viewEntry', {id: id});
    });
  };
}]);
