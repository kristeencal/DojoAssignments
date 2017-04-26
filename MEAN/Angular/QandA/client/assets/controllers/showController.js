var myApp = angular.module('myApp', ['ngRoute']);

// Show Controller
myApp.controller('showController', ['$scope', function ($scope)] {
    var posts = [
      { name: "Zen", comment: "I agree", likes: 0},
      { name: "Bats", comment: "vanilla!", likes: 0},
      { name: "Adam", comment: "chocolate", likes: 0},
    ];


    $scope.posts = posts;

    $scope.incrementLikes = function (post) {
        post.likes++;
    }

)};
