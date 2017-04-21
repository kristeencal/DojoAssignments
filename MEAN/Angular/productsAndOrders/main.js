var app = angular.module('app', []);
// console.log(app);
app.factory('objectFactory', function(){
    var objects = [
      {name: 'keyboard', price: 149.99},
      {name: 'mouse', price: 59.99},
      {name: 'basketball', price: 59.99}];
    var factory = {};

    factory.addProducts = function(factproduct, callback) {
      objects.push(factproduct);
        callback(objects);
    }
    factory.getObjects = function(callback) {
        callback(objects);


    }
    factory.delete = function(obj){

        var index = objects.indexOf(obj);
        objects.splice(index, 1)

    }
    return factory;
});

app.controller('objectsController', ['$scope', 'objectFactory', function($scope, objectFactory){
    $scope.objects = [];
    var index = function(){
      objectFactory.getObjects(function(data){
        $scope.objects = data;
      })
    }
    index();

    $scope.add = function (contproduct) {
      objectFactory.addProducts(contproduct, function(data){
        $scope.objects = data;

      })

    }

    $scope.delete = function (obj) {
      objectFactory.delete(obj);
      index();
    }


}]);
