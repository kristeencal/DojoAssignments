<html ng-app= "firstAngularapp">
<script src= "firstAngular.js"></script>
var app = angular.module('firstAngularapp', []);
app.controller('divController', ['$scope', function($scope) {
    $scope.myName = 'Christine';
    $scope.myFavoriteLanguage = 'Swift';
    $scope.myFavoriteJSLibrary = 'Angular';
}];

}
);
</script>
