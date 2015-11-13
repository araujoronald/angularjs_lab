(function() {

angular.module("app").controller("EquipeEditController", function EquipeEditController($scope, $location, $routeParams, messageCenterService, EquipeService){
    
    var msg = messageCenterService;
    $scope.modoEdicao = false;
    $scope.equipe = {};
    $scope.emblema = "";
    $scope.emblemaRecortado = "";
    var idEquipe = $routeParams.id;
    
    if(idEquipe){
        EquipeService.buscarEquipe(idEquipe).then(
            function(response){
                $scope.equipe = response.data;
                console.log('ativando');
                $scope.modoEdicao = true;
            }
        );
    }

    this.handleFileSelect = function(evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.emblema = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    
    angular.element(document.querySelector('#fileInputEmblema')).on('change', this.handleFileSelect);

    this.inserirOuAtualizar = function(){
        if($scope.modoEdicao){
            this.editarEquipe();
        } else {
            this.adicionarEquipe();
        }
    };
    
    this.adicionarEquipe = function(){ 
        if($scope.emblema.length > 0){
            $scope.equipe.emblema = $scope.emblemaRecortado;
        }
        EquipeService.adicionarEquipe($scope.equipe)
                .then(this.adicionarEquipeSucesso, this.adicionarEquipeErro);
        $scope.equipe = {};
        $scope.emblemaRecortado = "";
        $scope.emblema = "";
    };
    
    this.adicionarEquipeSucesso = function(response){
        msg.add('success', "Equipe registrada com sucesso");
        $location.path('/equipe');
    };
    
    this.adicionarEquipeErro = function(response){
        msg.add('danger', "Erro ao registrar equipe");
    };
    
    this.editarEquipe = function(){ 
        if($scope.emblema.length > 0){
            $scope.equipe.emblema = $scope.emblemaRecortado;
        }
        EquipeService.editarEquipe($scope.equipe)
                .then(this.editarEquipeSucesso, this.editarEquipeErro);
    };
    
    this.editarEquipeSucesso = function(response){
        msg.add('success', "Equipe atualizada com sucesso");
        $scope.equipe = {};
        $scope.emblemaRecortado = "";
        $scope.emblema = "";
        $location.path('/equipe');
    };
    
    this.editarEquipeErro = function(response){
        msg.add('danger', "Erro ao atualizar a equipe");
    };
    
    this.getDivisoes = function(){
        return ["Primeira", "Segunda", "Terceira", "Quarta", "Várzea"];
    };
    
    this.getUfs = function(){
        return ["Bahia", "DF", "Sergipe", "Alagoas", "Pernambuco"];
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
