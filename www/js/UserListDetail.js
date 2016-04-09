angular.module('starter.UserListDetail', ['ionic'])

.controller("UserListDetailCtrl",function($scope, $stateParams, userService){
	var index = $stateParams.index;
	$scope.item = userService.getUser(index);
});