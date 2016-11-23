angular.module('MeiQian')
.controller('NavController', ['$scope', 'Auth',
  function ($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
  }]);
