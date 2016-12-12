angular.module("app").config(
		function($routeProvider, $httpProvider) {

			$routeProvider.when('/', {
				templateUrl : 'view/home.html',
				controller : 'homecontroller',
			});

			$routeProvider.when('/doador', {
				templateUrl : 'view/doador/cadastro.html',
				controller : 'doadorcontroller',
				resolve : {
					doadores : function(doadorAPI) {
						return "";
					},
					doador : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/listaDoador', {
				templateUrl : 'view/doador/lista.html',
				controller : 'doadorcontroller',
				resolve : {
					doadores : function(doadorAPI) {
						return doadorAPI.getDoadores();
					},
					doador : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/detalhesDoador/:id', {
				templateUrl : 'view/doador/detalhes.html',
				controller : 'doadorcontroller',
				resolve : {
					doadores : function() {
						return "";
					},
					doador : function(doadorAPI, $route) {
						return doadorAPI
								.getDoadorByID($route.current.params.id);
					}
				}
			});

			$routeProvider.when('/agendar', {
				templateUrl : 'view/agenda/agendar.html',
				controller : 'agendacontroller',
				resolve : {
					laboratorios : function(laboratorioAPI) {
						return laboratorioAPI.getLaboratorios();
					},
					agendas : function(agendaAPI) {
						return agendaAPI.getAgendas();
					},
					agenda : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/listaAgenda', {
				templateUrl : 'view/agenda/lista.html',
				controller : 'agendacontroller',
				resolve : {
					laboratorios : function(laboratorioAPI) {
						return "";
					},

					agendas : function(agendaAPI) {
						return agendaAPI.getAgendas();
					},
					agenda : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/detalhesAgenda/:id', {
				templateUrl : 'view/agenda/detalhes.html',
				controller : 'agendacontroller',
				resolve : {
					laboratorios : function() {
						return "";
					},

					agendas : function() {
						return "";
					},
					agenda : function(agendaAPI, $route) {
						return agendaAPI
								.getAgendaByID($route.current.params.id);
					}
				}
			});

			$routeProvider.when('/listaLaboratorio', {
				templateUrl : 'view/laboratorio/lista.html',
				controller : 'laboratoriocontroller',
				resolve : {
					laboratorios : function(laboratorioAPI) {
						return laboratorioAPI.getLaboratorios();
					},
					laboratorio : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/adicionaLaboratorio', {
				templateUrl : 'view/laboratorio/cadastro.html',
				controller : 'laboratoriocontroller',
				resolve : {
					laboratorios : function(laboratorioAPI) {
						return "";
					},
					laboratorio : function() {
						return "";
					}
				}
			});

			$routeProvider.when('/detalhesLab/:id', {
				templateUrl : 'view/laboratorio/detalhes.html',
				controller : 'laboratoriocontroller',
				resolve : {
					laboratorios : function() {
						return "";
					},
					laboratorio : function(laboratorioAPI, $route) {
						return laboratorioAPI
								.getLaboratorioByID($route.current.params.id);
					}
				}
			});

			$routeProvider.when('/adicionaBolsa', {
				templateUrl : 'view/bolsa/cadastro.html',
				controller : 'bolsacontroller',
				resolve : {
					tipos : function() {
						return [ "A+", "A-", "B+", "B-", "AB+", "AB-", "O-",
								"O+" ];
					}
				}
			});

			$routeProvider.when('/login', {
				templateUrl : 'view/user/login.html',
				controller : 'usercontroller',
			});

			$routeProvider.when('/error', {
				templateUrl : 'view/error.html',
			});

			$routeProvider.otherwise({
				redirectTo : '/'
			});
		});
