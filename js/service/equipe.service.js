angular.module("app").service("EquipeService", function EquipeService(appConfig, $http){
    this.adicionarEquipe = function(equipe){        
        return $http.post(appConfig.urlServico + "equipe", equipe);
    };
    
    this.editarEquipe = function(equipe){        
        return $http.put(appConfig.urlServico + "equipe/" + equipe.id, equipe);
    };
    
     this.buscarEquipe = function(idEquipe){
        return $http.get(appConfig.urlServico + "equipe/" + idEquipe + "/edit");
    };
    
    this.listarEquipes = function(){
        return $http.get(appConfig.urlServico + "equipe");
    };
    
    this.removerEquipe = function(idEquipe){
        return $http.delete(appConfig.urlServico + "equipe/" + idEquipe);
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

