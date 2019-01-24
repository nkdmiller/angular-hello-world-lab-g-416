function MainController($scope) {
  $scope.name = 'Nate';
  $scope.email = 'nate@example.com';
  $scope.phone = '32344322334';
}

angular
	.module('app')
	.controller('MainController', MainController);