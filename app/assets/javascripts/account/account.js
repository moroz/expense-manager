angular.module('MeiQian')
  .factory('account', ['$http', function($http) {
    o = { entries: [], title: "", loaded: false };
    o.sum = function() {
      return this.entries.map(function(entry) {
        return parseFloat(entry.amount);
      }).reduce(function(a,b) {
        return a + b;
      }, 0.0);
    };
    o.getFromServer = function() {
      return $http.get('/api/account.json')
        .success(function(data) {
          angular.copy(data.entries, o.entries);
          o.balance = parseFloat(data.balance);
          o.currency = data.currency;
          o.loaded = true;
        });
    };
    o.addEntry = function(description, amount) {
      return $http.post('/api/entries.json', {description: description, amount: amount});
    };
    return o;
  }]);
