angular.module('MeiQian')
.factory('Entry', ['$resource', function($resource) {
  return $resource('/entries/:id');
}]);
