angular.module('MeiQian')
.factory('Entry', ['$resource', function($resource) {
  return $resource('/api/entries/:id.json');
}]);
