var app = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
      var employees = [
        { name: "Adrian" , gender: "Male", city: "New York" , salary: 70000}
        { name: "Glen" , gender: "Male", city: "Philadelphia" , salary: 80000}
        { name: "Phil" , gender: "Male", city: "Seattle" , salary: 90000}
        { name: "Carolyn" , gender: "Female", city: "San Jose" , salary: 100000}
      ];
      $scope.employees = employees;
    });
