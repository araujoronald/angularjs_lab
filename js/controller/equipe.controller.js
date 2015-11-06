angular.module("app").controller("EquipeController", function EquipeController($scope, $location, mensagens, EquipeService, appConfig){
    
    $scope.equipe = "";
    $scope.appConfig = appConfig;   
    $scope.showDetail = false;
    
    $scope.setEquipe = function(eqp){
        $scope.equipe = angular.copy(eqp);
        $scope.showDetail = true;
    };
});