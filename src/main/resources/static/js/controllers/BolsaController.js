angular.module('app').controller('bolsacontroller',function($scope,$rootScope,laboratorioAPI,agendaAPI,bolsaAPI,tipos,cookieLab,agendas,bolsa,bolsas,authService){
     $scope.tiposSangue = tipos;
     $scope.agendas = agendas.data;
     $scope.bolsa=bolsa.data;
     $scope.bolsas=bolsas.data;
     $scope.agenda={};
     $rootScope.isAuthorize = authService.isLogIn();

     
     $scope.buscarProcotolo = function(numProtocolo){
    	agendaAPI.getProtocolo(numProtocolo).success(function(data){
    		 $rootScope.isAuthorize = true;
    		 $scope.agenda = data;
    		 verificaData(data);
    		 verificaLab(data,cookieLab);		 
    	}).error(function(data,status){
    		$scope.message = "Não foi possivel conectar ao servidor tente mais tarde "+ data;
    	});
     };
     
     $scope.adicionaBolsa = function(bolsa,agenda){
    	 bolsa.doador = agenda.doador;
    	 bolsa.laboratorio = agenda.laboratorio;
    	 bolsa.numRastreamento= geraNumRastreamento(agenda.doador.nome+bolsa.tipoSanguineo);
    	 bolsaAPI.saveBolsa(bolsa).success(function(data){
	    	 $scope.message = "Bolsa de sangue salva com sucesso. Seu código de rastreamento é "+bolsa.numRastreamento;
	    	 $scope.frmBolsa.$setPristine();
		     $scope.formProtocolo.$setPristine();
		     delete $scope.bolsa;
	 	     delete $scope.agenda;
	 	     delete $scope.tiposSangue;
		 	 agendaAPI.alteraStatusParaConcluido(agenda.id).success(function(data){
		    		console.log("Agenda Atualizado!");});
	 	    }).error(function(data,status){
	 	      $scope.message = "Ocorreu um problema ao criar o doador "+ data;
	     });
     };
     
     var verificaData = function(data){
    	 if(data.statusAgenda === "CONCLUIDO"){
 			$scope.message = "Bolsa coletada no dia: "+data.dataConclusao;
 		 }
     }
     
     var verificaLab = function(data,cookiesLab){
    	 if (data.laboratorio.cnpj != cookiesLab.cnpj){
    		 $scope.message = $scope.message + ". Laboratórios não confere com número de protocolo"; 
    		 $scope.agenda ="";
    	 }
     }
     
     function geraNumRastreamento(nome,tipoSangue){
    	 var num = Sha256.hash(nome,tipoSangue); 
    	 num =	num.slice(1,10);
    	 return num;
     }
});
