(function(){

    var app = angular.module('app');
    app.directive('equipeLista', function(EquipeService){
        return {
            restrict: 'E',
            templateUrl: 'js/view/equipe/equipe.lista.html',
            link: function(scope){

                EquipeService.listarEquipes().then(
                    function(response){
                        scope.equipes = response.data;
                    }
                );
            }
        };
    });
    
})();

