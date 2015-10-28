angular.module("app").controller("EquipeController", function EquipeController($scope, EquipeService){
    
    $scope.emblema = "";
    $scope.emblemaRecortado = "";
    $scope.divisao = "";

    var handleFileSelect = function(evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.emblema = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    
    angular.element(document.querySelector('#fileInputEmblema')).on('change', handleFileSelect);
    
    $scope.adicionarEquipe = function(isValid){
        console.log("Passando pelo Controller");
        console.log("O formulário é " + isValid);
        EquipeService.adicionarEquipe($scope.formData);
    };
    
    $scope.setDivisao = function(value){
        console.log("Valor: " + value);
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