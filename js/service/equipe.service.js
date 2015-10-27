angular.module("app").service("EquipeService", function EquipeService($http){
    this.adicionarEquipe = function(equipe){
        console.log("Chamando o serviço de adicionar equipe");
        console.log(equipe);
    };
    
    this.nomeValido = function(valor){
        console.log("Nome: " + valor);
        if(valor == 'aaa' && valor.length === 3){
            return false;
        }
        return true;
    };
    
    this.siglaValida = function(valor){
        console.log("Sigla: " + valor);
        if(valor == 'bbb' && valor.length === 3){
            return false;
        }
        return true;
    };
});

