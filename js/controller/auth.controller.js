(function() {

angular.module("app").controller("AutenticacaoController", function AutenticacaoController($rootScope, $auth, $location, $http, appConfig, messageCenterService){
    
    this.usuario = {};
    this.credencial = {};
    var msg = messageCenterService;

    this.registrar = function(){ 
        $http.post(appConfig.urlServico + "usuario/registrar", this.usuario)
            .success(registrarSucesso)
            .catch(msg.add('danger', 'Erro ao registrar usuário')); 
    };
    
    this.registrarSucesso = function(response){
        console.log("usuário registrado com sucesso");
        $location.path('/equipe');
    };
    
    this.login = function(){
        $auth.login(this.credencial)
            .then(function(response){
                //$location.path('/equipe');
                return $http.get(appConfig.urlServico + 'api/autenticacao/usuario');
            })
            .catch(function(response){
                if(response.status === 401){
                    msg.add('danger', 'Usuário ou senha inválidos');
                } else {
                   msg.add('danger', 'Falha na autenticação');
                }
            }).then(function(response){
                console.log(response);
                var user = JSON.stringify(response.data.user);
                localStorage.setItem('user', user);
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;
                $location.path('/equipe');
            });
    };  

    this.isInvalidField = function(field){
        return field.$invalid && !field.$pristine;
    };
    
    this.isValidField = function(field){
        return field.$valid && !field.$pristine && field.$viewValue;
    };
    
    this.isPendingField = function(field){
        return field.$pending;
    };
});
    
})();
