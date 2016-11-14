angular.module('app').controller('laboratoriocontroller',function($scope,laboratorioAPI){
   $scope.laboratorios = [];

   var carregaLaboratorio = function(){
     laboratorioAPI.getLaboratorios().success(function(data){
        $scope.laboratorios = data;
      }).error(function (data, status) {
        $scope.message = "Aconteceu um problema: " + data;
     });
    };

    $scope.adicionaLaboratorio = function(laboratorio){
      laboratorioAPI.saveLaboratorio(laboratorio).success(function(data){
        $scope.message = "Laboratório adicionado com sucesso";
        $scope.formLaboratorio.$setPristine();
        delete $scope.laboratorio;
      }).error(function(data,status){
        $scope.message = "Ocorreu um problema ao criar o laboratório "+ data;
      });
    };


    carregaLaboratorio();
});
