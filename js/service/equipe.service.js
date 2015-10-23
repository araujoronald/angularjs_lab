angular.module("app").service("EquipeService", function EquipeService($http){
    this.adicionarEquipe = function(equipe){
        console.log("Chamando o serviço de adicionar equipe");
        console.log(equipe);
    };
    
    this.nomeValido = function(nome){
        console.log("Chamando o serviço de validar nome");
        console.log(nome);
        if(nome == 'a'){
            return false;
        }
        return true;
    };
});

