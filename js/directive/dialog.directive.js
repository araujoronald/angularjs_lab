(function(){

    var app = angular.module('app');
    app.directive('equipeLista', function(EquipeService){
        return {
            restrict: 'E',
            templateUrl: 'js/view/equipe/equipe.lista.html',
            link: function(scope){
                scope.maxSize = 3;
                scope.itemsPerPage = 2;
                scope.bigTotalItems = 1000;
                scope.bigCurrentPage = 1;
                scope.currentPage = 1;
                scope.setPage = function (pageNo) {
                    scope.currentPage = pageNo;
                };
                EquipeService.listarEquipes().then(
                    function(response){
                        scope.equipes = response.data;
                        scope.totalItems = scope.equipes.length;
                    }
                );
            }
        };
    });
    
})();
