angular.module("app").controller("EquipeController", function EquipeController(
                                                                        $scope, 
                                                                        $location, 
                                                                        messageCenterService, 
                                                                        EquipeService, 
                                                                        AutenticacaoService, 
                                                                        appConfig,
                                                                        $uibModal){
    
    $scope.equipe = "";
    $scope.appConfig = appConfig;   
    $scope.showDetail = false;
    var msg = messageCenterService;
    
    $scope.setEquipe = function(eqp){
        $scope.equipe = angular.copy(eqp);
        $scope.showDetail = true;
    };
    
    $scope.logout = function(){
        AutenticacaoService.logout();
        $location.path('/auth/login');
    };
    
    $scope.removerEquipe = function(id){
        var dialog = $uibModal.open({
            templateUrl: 'js/view/template/confirm_dialog.html'
        });
        
        dialog.result.then(function(){
            EquipeService.removerEquipe(id)
                    .then(msg.add('success', 'Equipe removida com sucesso'), 
                          msg.add('danger', 'Erro ao remover a equipe'));
        });
    };
});