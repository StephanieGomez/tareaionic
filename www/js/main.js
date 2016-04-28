angular.module('starter.Main', ['ionic'])


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('main', {
    url: "/main",
    templateUrl: "templates/main.html",
    controller: 'MainCtrl'
  });
})

.controller("MainCtrl",function(){
  console.log("Main Controller says: Hola equipo /x");
});