angular.module('app').controller('bolsacontroller',function($scope,laboratorioAPI,agendaAPI,bolsaAPI,tipos){
     $scope.tiposSangue = tipos;
     $scope.bolsa={};
     $scope.agenda={};
     
     $scope.buscarProcotolo = function(numProtocolo){
    	agendaAPI.getProtocolo(numProtocolo).success(function(data){
    		 $scope.agenda = data;
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
 	    }).error(function(data,status){
 	      $scope.message = "Ocorreu um problema ao criar o doador "+ data;
       });
     };
     
     function geraNumRastreamento(nome,tipoSangue){
    	 var num = Sha256.hash(nome,tipoSangue); 
    	 num =	num.slice(1,10);
    	 return num;
     }
});
