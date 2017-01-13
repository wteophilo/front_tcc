angular.module('app').controller('agendacontroller',function($scope,$rootScope,$location,agendaAPI,laboratorios,agenda,agendas,authService){
   $scope.agendas = agendas.data;
   $scope.agenda=agenda.data;
   $scope.laboratorios =laboratorios.data;
   $rootScope.isAuthorize = authService.isLogIn();
   
       
   $scope.agendar = function(agenda){
		agenda.numProtocolo = Sha256.hash(agenda.doador.nome+agenda.dataAgendamento);
		agenda.numProtocolo = agenda.numProtocolo.slice(1,10);
		agendaAPI.saveAgenda(agenda).success(function(data){
	      $scope.message = "Agenda realizada com sucesso. Seu número de protocolo é "+agenda.numProtocolo;
	      $scope.formAgenda.$setPristine();
	      delete $scope.agenda;
	    }).error(function(data,status){
	      $scope.message = "Ocorreu um problema ao criar o doador "+ data;
	    });
   };
   
});
