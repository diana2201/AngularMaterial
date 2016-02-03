angular.module("app").controller('LoginController', function($scope, $location, AuthService,$mdDialog) {

  $scope.credentials = { username: "", password: "" };


  $scope.login = function() {
    $scope.authToken = AuthService.credentials;

    if($scope.credentials.username === $scope.authToken.username && $scope.credentials.password === $scope.authToken.password)
    {
      $location.path('/home');
    }
    else{
      $mdDialog.show(
        $mdDialog.alert().clickOutsideToClose(true)
        .title('Ups ')
        .textContent('Contraseña o nombre de usuario incorrectos')
        .ok('OK')
      );
    }

  };
});
