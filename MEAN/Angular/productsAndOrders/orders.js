var app = angular.module('app', []);

app.controller('ordersController', function($scope){
  var objectsQty = [
    {name: "keyboard", price: 149.99, qtyavailable: 50},
    {name: "mouse", price: 59.99, qtyavailable: 50},
    {name: "basketball", price: 59.99, qtyavailable: 50}
  ];

  $scope.objectsQty = objectsQty;

  $scope.decrementQty = function(objectQty){
    object.qty--;
  }
});
