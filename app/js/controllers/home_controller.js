angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {

  $scope.irClima = function () {
    $location.path('/clima');
  };


});
