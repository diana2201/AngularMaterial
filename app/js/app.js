angular.module("app", ["ngResource", "ngRoute","ngMaterial"]).config(
  function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('red')
      .warnPalette('yellow');
  }
);
