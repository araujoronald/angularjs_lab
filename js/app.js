var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
           .when("/", {
               templateUrl: "js/view/equipe.view.html",
               controller: "EquipeController"
   });
});
