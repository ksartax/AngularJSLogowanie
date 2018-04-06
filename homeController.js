var app = angular.module('myApp');
app.controller('HomeController', function ($scope, $rootScope, $stateParams, $state) {
    $scope.user = $rootScope.userName;
});