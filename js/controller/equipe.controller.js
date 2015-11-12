angular.module("app").controller("EquipeController", function EquipeController(
                                                                        $scope, 
                                                                        $location, 
                                                                        messageCenterService, 
                                                                        EquipeService, 
                                                                        AutenticacaoService, 
                                                                        appConfig){
    
    $scope.equipe = "";
    $scope.appConfig = appConfig;   
    $scope.showDetail = false;
    
    $scope.setEquipe = function(eqp){
        $scope.equipe = angular.copy(eqp);
        $scope.showDetail = true;
    };
    
    $scope.logout = function(){
        AutenticacaoService.logout();
        $location.path('/auth/login');
    };
});