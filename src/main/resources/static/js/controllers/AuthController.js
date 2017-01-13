angular.module('app').controller('authcontroller',function($scope,$rootScope,$cookies,$cookieStore,$location,laboratorioAPI,authService){
	//$rootScope.isAuthorize = false;
    $rootScope.isAuthorize = authService.isLogIn();
	
	$scope.loginLab = function(laboratorio){
    	laboratorioAPI.loginLaboratorio(laboratorio).success(function(data){
    		authService.setCookies(data);
    	//	$rootScope.isAuthorize = true;
    		$location.path('/');
    	}).error(function(data,status){
    		limpaFormulario();
    		$scope.message = "Falha na autenticação: Verifique seu email e senha";
    		
    	});
    }
	
	$scope.logoutLab = function(){
		authService.removeCookies();
		$rootScope.isAuthorize = false;
	}
	
	
	limpaFormulario = function(){
		$scope.formLogin.$setPristine();
		delete $scope.laboratorio;
	}
});