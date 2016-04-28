// se manda llamar el modulo junto con su herencia

angular.module('starter.UserList', ['ionic'])

// comprueba si la ruta main carga la template main con el controlador controller. y dependiendo la ruta
//carga su informacion.
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('UserList', {
		url: "/UserList",
		templateUrl: "templates/UserList.html",
		controller: "UserListCtrl"
	})
  	.state('UserListDetail', {
		url: "/UserListDetail/:index",
		templateUrl: "templates/UserListDetail.html",
		controller: "UserListDetailCtrl"
	})
})

//obtiene los usuarios a travez del json y guarda todo en el arreglo de 
//usuarios.

.factory('userService', function($http) {
  var users = [];
  
	return {
		getUsers: function(){
			return $http.get('https://randomuser.me/api/?results=10').then(function(response){
				users = response.data.results;
				return response.data.results;
			});
		},
		getUser: function(index){
		  return users[index];
		}
	
	}
})

 // La funcion scope guarda toda la informacion de los usuarios.

.controller("UserListCtrl",function($scope, userService){
	userService.getUsers().then(function(users){
		$scope.users = users;
	});
});