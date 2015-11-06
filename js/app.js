angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'ngImgCrop']);
angular.module('app')
    .config(function($routeProvider) {
       $routeProvider
               .when("/equipe", {
                   templateUrl: "js/view/equipe/equipe.html",
                   controller: "EquipeController"
                })
                .when("/equipe/nova", {
                   templateUrl: "js/view/equipe/equipe.edita.html",
                   controller: "EquipeEditController"
                })
    })

    .constant("appConfig", {
        "urlServico": "http://localhost/laravel_lab/public/" 
    })

    .factory("mensagens", function($rootScope){    
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


