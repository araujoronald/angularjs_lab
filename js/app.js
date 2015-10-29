var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'ngImgCrop']);
app.config(function($routeProvider) {
   $routeProvider
           .when("/equipe", {
               templateUrl: "js/view/equipe/equipe.list.view.html",
               controller: "EquipeController"
            })
            .when("/equipe/nova", {
               templateUrl: "js/view/equipe/equipe.create.view.html",
               controller: "EquipeController"
            })
});

app.constant("appConfig", {
   "urlServico": "http://localhost/laravel_lab/public/" 
});

app.factory("mensagens", function($rootScope){    
    $rootScope.fecharMensagem = function(index) {
        $rootScope.mensagens.splice(index, 1);
    };

    return {
        catch: function(mensagem){
            return function(motivo){
                $rootScope.mensagens = [{mensagem: mensagem, tipo: "danger"}];
            };
        },
        
        success: function(mensagem){
            return $rootScope.mensagens = [{mensagem: mensagem, tipo: "success"}]; 
        }
    };
});


