angular.module('app').directive('nomeequipe', function($q, $timeout, EquipeService) {
    return {      
        restrict: 'A',
        require: 'ngModel',

        link: function(scope, element, attr, ctrl) {
            ctrl.$asyncValidators.nomeequipe = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                }

                var def = $q.defer();
                $timeout(function() {  
                    console.log("Consultando: " + modelValue);
                    if (EquipeService.nomeValido(modelValue)) {
                        def.resolve();
                    } else {
                        def.reject();
                    }

                }, 500);
                return def.promise;
            };  
        }
    };
});


