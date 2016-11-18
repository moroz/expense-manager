angular.module('MeiQian')
  .factory('account', function() {
    o = {
      entries: [
        {id: 1, amount: 2.50, description: "Papkens"},
        {id: 10, amount: 15, description: "Dupa"},
        {id: 2, amount: -5, description: "Obiad"}
      ],
      sum: function() {
        return this.entries.map(function(entry) {
          return entry.amount;
        }).reduce(function(a,b) {
          return a + b;
        });
      }
    };
    return o;
  });
