angular.module('app').controller('doadorcontroller',function($scope,$http,$rootScope, $location){
   $rootScope.activetab = $location.path();
   $scope.doadores=[];

   var carregaDoadores = function(){
     $http.get('http://localhost:8080/doador/lista').success(function(data){
        $scope.doadores = data;
     }).error(function (data, status) {
				$scope.message = "Aconteceu um problema: " + data;
		 });
    };

    $scope.adicionaDoador = function(doador){
      $http.post("http://localhost:8080/doador/",doador).success(function(data){
        $scope.formDoador.setPristine();
        $scope.message = "Cadastro realizado com sucesso";
        delete $scope.doador;
      }).error(function(data,status){
        $scope.message = "Ocorreu um problema ao criar o doador "+ data;
      });
    };

    carregaDoadores();
});
