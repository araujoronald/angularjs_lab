var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMessages']);
app.config(function($routeProvider) {
   $routeProvider
           .when("/", {
               templateUrl: "js/view/equipe.view.html",
               controller: "EquipeController"
            })
            .when("/equipe/nova", {
               templateUrl: "js/view/equipe/equipe.create.view.html",
               controller: "EquipeController"
            })
});

