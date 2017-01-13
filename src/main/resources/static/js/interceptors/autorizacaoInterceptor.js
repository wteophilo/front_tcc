angular.module('app').factory('autorizacaoInterceptor', function($q,$cookies,$cookieStore,$location,authService) {
	return {
		request: function(config){
			config.headers = config.headers || {};
			var cookies = authService.getCookies();
		    if (cookies == null){
		    	//TODO
		    }
		},
		
		responseError: function(response){
			if(rejection.status===401 || rejection.status===403){
				authService.removeCookies();
				$location.path("/login");
			}
			return q.reject(response);
		}
	};
});