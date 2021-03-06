angular.module('app').controller('laboratoriocontroller',function($scope,$rootScope,$cookies,$cookieStore,$location,authService,laboratorioAPI,laboratorios,laboratorio){
   $scope.laboratorios = laboratorios.data;
   $scope.laboratorio = laboratorio.data;
   $scope.message=null;
   $rootScope.isAuthorize = authService.isLogIn();
   
    $scope.adicionaLaboratorio = function(laboratorio){
      laboratorioAPI.saveLaboratorio(laboratorio).success(function(data){
        $scope.message = "Laboratório adicionado com sucesso";
        $scope.formLaboratorio.$setPristine();
        delete $scope.laboratorio;
      }).error(function(data,status){
        $scope.message = "Ocorreu um problema ao criar o laboratório "+ data;
      });
    };
});
