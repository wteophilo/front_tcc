angular.module("app").factory("authService", function ($http,$cookies,$cookieStore, config) {
	var _getCookies = function(){
		return $cookieStore.get('labUser');
	}
	
	var _setCookies= function(data){
		$cookieStore.put('labUser',data);
	}
	
	var _removeCookies= function(){
		$cookieStore.remove('labUser');
	}
	
	var _isLogIn = function(){
		var cookies = $cookieStore.get('labUser');
		return (cookies==undefined||cookies=="")? false : true;
	}
	
	return {
		getCookies: _getCookies,
		setCookies: _setCookies,
		removeCookies: _removeCookies,
		isLogIn: _isLogIn
	};
});
