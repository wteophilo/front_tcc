angular.module('app').controller('homecontroller', function($rootScope, $location,$scope,$http){
   $rootScope.activetab = $location.path();
});
