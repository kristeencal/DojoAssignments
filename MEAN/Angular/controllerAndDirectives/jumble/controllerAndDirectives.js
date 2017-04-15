var app = angular.module('app', []);

app.controller('MainController', function($scope){

})

<script>

var firstApp = angular.module('ModuleName', [])

.controller('ControllerName', function ($scope) {

    $scope.products = [

        { id: 1, name: 'Red Book', color: 'red'},
        { id: 2, name: 'Blue Book', color: 'blue'},
        { id: 3, name: 'Light Blue Book', color: 'lightblue'}
    ];
});

</script>

var APP = angular.module('APP', [])

app.controller('MainCtrl', function($scope) {
  $scope.primitive = 'value';
  this.user = {};
  this.display = {
    ngIf: false,
    ngShow: false
  };
    this.broadcast = function() {
      $scope.$broadcast ('CUSTOM_EVENT');
    };
})
app.directive('someDirective', function() {
  return {
    scope: {
      someDirective: '@'
    },
    template: "some directive",
    link: function(scope){
      console.log('some directive' + scope.someDirective);
      scope.$on('CUSTOM_EVENT', function(){
        var text = 'event received +' + scope.someDirective;
        console.log(text);
      });
    }
  };
}
)
});
var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope){
      var employees = [
        { name: "Adrian", gender: "Male", city: "New York", salary: 70000},
        { name: "Glen", gender: "Male", city: "Philaelphia", salary: 80000},
        { name: "Phil", gender: "Male", city: "Seattle", salary: 90000},
        { name: "Carolyn", gender: "Female", city: "San Jose", salary: 100000},
      ];
      $scope.employees = employees;
    });
