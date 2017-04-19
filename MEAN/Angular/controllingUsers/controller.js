var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'login.html'
  })
  .when('/dashboard', {
      templateUrl: 'dashboard.html'
  })
  .otherwise({
      redirectTo: '/'
  });
});

app.controller('loginCtrl', function($scope) {
    $scope.submit = function() {
      var firstname= $scope.firstname;
      var lastname= $scope.lastname;
      var favlang= $scope.favlang;
      if($scope.firstname == 'admin' && $scope.lastname == 'admin') {
        $location.path('/dashboard');
      } else {
        alert('Thanks for visiting');
      }


    };
});
