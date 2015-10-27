angular.module("app").controller("EquipeController", function EquipeController($scope, EquipeService){
    $scope.adicionarEquipe = function(isValid){
        console.log("Passando pelo Controller");
        console.log("O formulário é " + isValid);
        EquipeService.adicionarEquipe($scope.formData);
    };
    
    $scope.getDivisoes = function(){
        return ["Primeira", "Segunda", "Terceira", "Quarta", "Várzea"];
    };
    
    $scope.getUfs = function(){
        return ["Bahia", "DF", "Sergipe", "Alagoas", "Pernambuco"];
    };
    
    $scope.isInvalidField = function(field){
        return field.$invalid && !field.$pristine;
    };
    
    $scope.isValidField = function(field){
        return field.$valid && !field.$pristine && field.$viewValue;
    };
    
    $scope.isPendingField = function(field){
        return field.$pending;
    }
});