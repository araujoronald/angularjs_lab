angular.module('app').directive('sigla', function($q, $timeout, EquipeService) {
    return {      
        restrict: 'A',
        require: 'ngModel',

        // create linking function and pass in our NgModelController as a 4th argument
        link: function(scope, element, attr, ctrl) {
              ctrl.$asyncValidators.sigla = function(modelValue, viewValue) {
                 if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                  }

                  var def = $q.defer();
                  $timeout(function() {
                    // Mock a delayed response
                    if (EquipeService.nomeValido(modelValue)) {
                      def.resolve();
                    } else {
                      def.reject();
                    }

                  }, 1000);

                  return def.promise;
              };
              
        }
    };
});


