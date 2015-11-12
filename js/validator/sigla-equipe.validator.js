angular.module('app').directive('siglaequipe', function($q, $timeout, EquipeService) {
    return {      
        restrict: 'A',
        require: 'ngModel',

        link: function(scope, element, attr, ctrl) {
       
            ctrl.$asyncValidators.siglaequipe = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                }

                var def = $q.defer();
                $timeout(function() { 
                    if (EquipeService.siglaValida(modelValue)) {
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