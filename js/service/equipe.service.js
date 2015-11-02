angular.module("app").service("EquipeService", function EquipeService(appConfig, mensagens, $http){
    this.adicionarEquipe = function(equipe){        
        return $http.post(appConfig.urlServico + "equipe", equipe)
                .catch(mensagens.catch("Não foi possível incluir a Equipe"));
    }    
    
    this.listarEquipes = function(){
        return $http.get(appConfig.urlServico + "equipe")
                .catch(mensagens.catch("Não foi possível incluir a Equipe"));
    }
    
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

