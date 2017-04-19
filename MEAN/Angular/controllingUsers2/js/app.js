angular.module("app", ["ui.router"])

    .config(function config($stateProvider) {
      $stateProvider.state("index", {
          url: ""
          controller: "FirstCtrl as first",
          templateUrl: "templates/first.html"
      })
      $stateProvider.state("second", {
        url: "/second",
        controller: "SecondCtrl as second",
        templateUrl: "templates/second.html"
      })
    })

    .service("greeting", function Greeting() {
        var greeting = this
    })
    .controller("FirstCtrl", function FirstCtrl() {
        var first = this;

        first.greeting = "First"
    })
    .controller("SecondCtrl", function SecondCtrl() {
        var second = this;

        second.greeting = "First"
    } )
