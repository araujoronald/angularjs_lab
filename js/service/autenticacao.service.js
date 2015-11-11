angular.module("app").service("AutenticacaoService", function AutenticacaoService($rootScope, $auth){
    
    this.logout = function(){
        $auth.logout().then(function(){
            localStorage.removeItem('user');
            $rootScope.authenticated = false;
            $rootScope.currentUser = null;
        });
    }
});

