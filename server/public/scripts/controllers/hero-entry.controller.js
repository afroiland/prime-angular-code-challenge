app.controller("HeroEntryController", ["$http", function($http) {
  console.log('HeroEntryController running');

  var self = this;

  self.newHero = {};

  self.addHero = function() {
      $http.post('/heroes', self.newHero)
        .then(function(response) {
          // cool
          console.log('response: ', response.data);
          // make GET request for employee data
          self.newHero = {};
        },
        function(response) {
          // error
          console.log('ERROR response: ', response.data);
        });
    }

}]);
