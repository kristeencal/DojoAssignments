var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeList) {
  $routeList
      .when('/all', {
        templateUrl: 'partials/all.html',
        controller: 'allController'
      })
      .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController'
      })
      .when('/answer', {
        templateUrl: 'partials/answer.html',
        controller: 'answerController'
      })
      .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'showController'
      })
      .otherwise({
        redirectTo: '/'
      });

});
