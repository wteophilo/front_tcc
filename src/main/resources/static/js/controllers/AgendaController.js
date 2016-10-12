angular.module('app').controller('agendacontroller',function($scope,agendaAPI){
   $scope.listaAgenda=[];
   $scope.todosAsAgendas = [];
   $scope.agenda={};

   var carregaLaboratorio = function(lab){
     agendaAPI.getAgenda().success(function(data){
        $scope.todosAsAgendas = data;
     }).error(function (data, status) {
       $scope.message = "Não foi possivel conectar ao servidor tente mais tarde " + data;
     });
    };

    $scope.agendar = function(agenda){
        agendaAPI.saveAgenda(agenda).success(function(data){
          $scope.message = "Agenda realizada com sucesso";
          $scope.formAgenda.$setPristine();
          delete $scope.agenda;
        }).error(function(data,status){
          $scope.message = "Ocorreu um problema ao criar o doador "+ data;
        });
    };

});
