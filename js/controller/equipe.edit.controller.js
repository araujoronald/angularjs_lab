(function() {

angular.module("app").controller("EquipeEditController", function EquipeEditController($scope, $location, messageCenterService, EquipeService){
    
    var msg = messageCenterService;
    this.equipe = {};
    $scope.emblema = "";
    $scope.emblemaRecortado = "";

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

    this.adicionarEquipe = function(){ 
        if($scope.emblema.length > 0){
            this.equipe.emblema = $scope.emblemaRecortado;
        }
        console.log(this.equipe);
        EquipeService.adicionarEquipe(this.equipe)
                .then(this.adicionarEquipeSucesso, this.adicionarEquipeErro);
        this.equipe = {};
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
