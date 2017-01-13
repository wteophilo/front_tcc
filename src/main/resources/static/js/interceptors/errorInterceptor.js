angular.module('app').factory('errorInterceptor', function($q,$location) {
	return {
		responseError: function(rejection){
			if(rejection.status===404){
				$location.path("/404");
			}else if(rejection.status===401 || rejection.status===403){
				$location.path("/login");
			}else{
				$location.path("/error");	
			}
			return $q.reject(rejection);
		}	
	};
});