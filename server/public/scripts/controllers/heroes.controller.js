app.controller("HeroesController", ["$http", function($http) {
  console.log('HeroesController running');
  var self = this;

  self.heroArray = [];

  getHeroes();

  function getHeroes() {
    // console.log('getting heroes');
    $http.get('/heroes')
      .then(function(response) {
        self.heroArray = response.data;
        // console.log('self.heroArray: ', self.heroArray);
      });
  }

  self.deleteHero = function(hero) {
    console.log(hero);
    $http.delete('/heroes/' + hero.id)
      .then(function(response) {
        console.log('deleted hero: ', hero);
        getHeroes();
      });
  }

}]);
