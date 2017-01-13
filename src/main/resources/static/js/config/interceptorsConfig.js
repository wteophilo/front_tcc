angular.module("app").config(function($httpProvider){
	$httpProvider.interceptors.push("errorInterceptor");
	//$httpProvider.interceptors.push("autorizacaoInterceptor");
});