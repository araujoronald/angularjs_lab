angular.module("app").controller("EquipeController", function EquipeController($scope, EquipeService){
    $scope.adicionarEquipe = function(isValid){
        console.log("Passando pelo Controller");
        console.log("O formulário é " + isValid);
        EquipeService.adicionarEquipe($scope.formData);
    };
});