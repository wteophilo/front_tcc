angular.module('app').run(function($rootScope, $location, authService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (next.authorize) {
			if (!authService.isLogIn()){
				$location.path('/login');
			}
		}
	});

});