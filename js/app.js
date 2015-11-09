angular.module('app', ['ngRoute', 'ui.router', 'ui.bootstrap', 'ngMessages', 'ngImgCrop', 'satellizer'])
    .config(function($routeProvider, $stateProvider, $urlRouterProvider, $authProvider) {
        
        $authProvider.loginUrl = '/api/autenticacao'; 

        $urlRouterProvider.otherwise('/equipe');
        
        $routeProvider
            .when("/auth/login", {
                templateUrl: "js/view/auth/auth.login.html",
                controller: "AutenticacaoController"
            })
            .when("/equipe", {
                templateUrl: "js/view/equipe/equipe.html",
                controller: "EquipeController"
            })
            .when("/equipe/nova", {
                templateUrl: "js/view/equipe/equipe.edita.html",
                controller: "EquipeEditController"
            })
            .when("/usuario/registrar", {
                templateUrl: "js/view/auth/auth.registrar.html",
                controller: "AutenticacaoController"
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


