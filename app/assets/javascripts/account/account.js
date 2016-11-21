angular.module('MeiQian')
  .factory('account', ['$http', function($http) {
    o = { entries: [], title: "", loaded: false };
    o.sum = function() {
      return this.entries.map(function(entry) {
        return parseFloat(entry.amount);
      }).reduce(function(a,b) {
        return a + b;
      });
    };
    o.getFromServer = function() {
      return $http.get('/account.json')
        .success(function(data) {
          angular.copy(data.entries, o.entries);
          o.balance = data.balance;
          o.loaded = true;
        });
    };
    o.addEntry = function(description, amount) {
      return $http.post('/account/entries.json', {description: description, amount: amount});
    };
    return o;
  }]);
