angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'ngImgCrop', 'satellizer', 'MessageCenterModule'])
    .config(function($routeProvider, $authProvider, $provide, $httpProvider) {
        
        
        function redirectWhenLoggedOut($q, $injector, $location) {
            return {
                responseError: function(rejection) {
                    this.rejection = rejection;
                    var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];
                    angular.forEach(rejectionReasons, function(value, key) {
                        if(this.rejection.data.error === value) {
                            localStorage.removeItem('user');
                            $location.path('/auth/login');
                        }
                    });
                    return $q.reject(rejection);
                }
            }
        }
        
        $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);
        $httpProvider.interceptors.push('redirectWhenLoggedOut');
        
        
        $authProvider.loginUrl = 'http://localhost/laravel_lab/public/api/autenticacao'; 
        $authProvider.tokenPrefix = '';
        
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
            .otherwise({
                redirectTo: '/'
            });
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
    })
    
    .run(function($rootScope, $location){
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            var user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
            } 
            
            
            if(next.originalPath === '/auth/login'){
                event.preventDefault();
                $location.path('/equipe');
            }
        });
    })
;


