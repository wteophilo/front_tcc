angular.module("app").config(function($routeProvider){

  $routeProvider.when('/', {
     templateUrl: 'view/home.html',
     controller: 'homecontroller',
  });


  $routeProvider.when('/doador', {
     templateUrl: 'view/doador/cadastro.html',
     controller: 'doadorcontroller',
  });

  $routeProvider.when('/agendar', {
     templateUrl: 'view/agenda/agendar.html',
     controller: 'agendacontroller',
  });

  $routeProvider.when('/listaLaboratorio', {
     templateUrl: 'view/laboratorio/lista.html',
     controller: 'laboratoriocontroller',
  });

  $routeProvider.when('/adicionaLaboratorio', {
     templateUrl: 'view/laboratorio/cadastro.html',
     controller: 'laboratoriocontroller',
  });

  $routeProvider.when('/erro500', {
     templateUrl: 'view/erros/500.html',
  });


  $routeProvider.otherwise ({ redirectTo: '/' });
 });
