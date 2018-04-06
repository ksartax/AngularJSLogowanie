var app = angular.module('myApp');
app.controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "Przyk³ad logowania w AngularJS";
    $scope.formSubmit = function () {
        if (LoginService.login($scope.username, $scope.password)) {
            $rootScope.userName = $scope.username;
            $scope.error = '';
            $scope.password = '';
            $state.transitionTo('home');
        } else {
            $scope.error = "nie poprawna nazwa uzytkownika lub haslo!";
        }
    };
});