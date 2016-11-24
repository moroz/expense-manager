angular.module('MeiQian')
.controller('EntryViewController', ['Entry', '$stateParams', '$scope', function(Entry, $stateParams, $scope) {
  $scope.entry = Entry.get({ id: $stateParams.id }, function() {});
}])
.controller;
