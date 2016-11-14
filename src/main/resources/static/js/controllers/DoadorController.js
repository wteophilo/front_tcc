angular.module('app').controller('doadorcontroller',function($scope, doadorAPI) {
	$scope.doadores = [];
	
	var carregaDoadores = function() {
		doadorAPI.getDoador().success(function(data) {
			$scope.doadores = data;
		}).error(function(data, status) {
			$scope.message = "Não foi possivel conectar ao servidor tente mais tarde "+ data;
		});
	};

	$scope.adicionaDoador = function(doador) {
		DoadorAPI.saveDoador(doador).success(function(data) {
			$scope.message = "Doador adicionado com sucesso";
			$scope.formDoador.$setPristine();
			delete $scope.doador;
		}).error(function(data, status) {
			$scope.message = "Ocorreu um problema ao criar o Doador "+ data;
		});
	};
	carregaDoadores();
});
