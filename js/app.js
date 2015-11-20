angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngImgCrop', 'satellizer', 'MessageCenterModule'])
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
        
        
        $authProvider.google({
            clientId: '571732240769-3trpjtbatlm1n98v0c50m2u5rqhgfoep.apps.googleusercontent.com',
            url: 'http://localhost/laravel_lab/public/api/autenticacao/google',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host
        });
        
        $authProvider.github({
            clientId: 'bbb8298bf84e51ae6e16',
            url: 'http://localhost/laravel_lab/public/api/autenticacao/github',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host
        });
        
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
            .when("/equipe/edita/:id", {
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

    .run(function($rootScope, $location){
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            var user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
            } else {
                $location.path('/auth/login');
            }
        });
    })
;


