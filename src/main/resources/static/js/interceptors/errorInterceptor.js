angular.module('app').factory('errorInterceptor', function($q,$location) {
	return {
		responseError: function(rejection){
			if(rejection.status===401){
				$location.path("/login");
			}else{
				$location.path("/error");	
			}
			return $q.reject(rejection);
		}	
	};
});