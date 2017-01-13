angular.module('app').controller('homecontroller', function($rootScope, $location,$scope,$http,authService){
   $rootScope.activetab = $location.path();
   $rootScope.isAuthorize = authService.isLogIn();
});
