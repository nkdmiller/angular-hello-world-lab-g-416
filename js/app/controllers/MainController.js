function MainController($scope) {
  $scope.name = 'Kayla';
  $scope.email = 'kooochoa@gmail.com';
  $scope.phone = '32344322334';
}

angular
	.module('app')
	.controller('MainController', MainController);