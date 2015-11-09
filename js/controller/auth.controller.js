(function() {

angular.module("app").controller("AutenticacaoController", function AutenticacaoController($scope, $location, $http, appConfig, mensagens){
    
    this.usuario = {};
    this.credencial = {};

    this.registrar = function(){ 
        $http.post(appConfig.urlServico + "auth/registrar", usuario)
            .success(registrarSucesso)
            .catch(mensagens.catch("Não foi possível realizar o cadastro do usuário"));
        
    };
    
    this.registrarSucesso = function(response){
        console.log("usuário registrado com sucesso");
        $location.path('/equipe');
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