var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/hero-entry', {
            templateUrl: '/views/templates/hero-entry.html',
            controller: 'HeroEntryController',
            controllerAs: 'hec'
        })
        .when('/heroes', {
            templateUrl: '/views/templates/heroes.html',
            controller: 'HeroesController',
            controllerAs: 'hc'
        })
        .otherwise({
            redirectTo: 'heroes'
        });
}]);
