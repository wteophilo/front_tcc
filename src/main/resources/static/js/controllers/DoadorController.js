angular.module('app').controller('doadorcontroller',function($scope, doadorAPI,doadores,doador) {
	$scope.doadores = doadores.data;
	$scope.doador = doador.data

	$scope.adicionaDoador = function(doador) {
		DoadorAPI.saveDoador(doador).success(function(data) {
			$scope.message = "Doador adicionado com sucesso";
			$scope.formDoador.$setPristine();
			delete $scope.doador;
		}).error(function(data, status) {
			$scope.message = "Ocorreu um problema ao criar o Doador "+ data;
		});
	};
});
