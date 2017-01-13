angular.module("app").config(function($routeProvider,$httpProvider) {		
			$routeProvider.when('/', {
				templateUrl : 'view/home.html',
				controller : 'homecontroller',
				authorize : false 
			});

			$routeProvider.when('/doador', {
				templateUrl : 'view/doador/cadastro.html',
				controller : 'doadorcontroller',
				authorize : false, 
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
				authorize : false, 
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
				authorize : false, 
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
				authorize : false, 
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
				authorize : true, 
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
				authorize : true, 
				resolve : {
					tipos : function() {
						return [ "A+", "A-", "B+", "B-", "AB+", "AB-", "O-",
								"O+" ];
					},
				    cookieLab : function(authService){
				    	var cookies = authService.getCookies();
				    	if (cookies === undefined || cookies==""){
				    		return "";
				    	}
				    	return cookies ;
				    },
				    agendas : function(authService,agendaAPI){
				    	return "";
				    },
				    bolsa : function(bolsaAPI, $route) {
						return "";
					},
					bolsas : function(authService,bolsaAPI){
						return "";
					}
				}
			});
			
						

			$routeProvider.when('/listaBolsas', {
				templateUrl : 'view/bolsa/lista.html',
				controller : 'bolsacontroller',
				authorize : true, 
				resolve : {
					tipos : function() {
						return "";
					},
					cookieLab : function(authService){
				    	return "";
				    },
				    agendas : function(authService,agendaAPI){
				    	return "";
				    },
				    
				    bolsa : function(bolsaAPI, $route) {
						return "";
					},
					bolsas : function(authService,bolsaAPI){
						var cookies = authService.getCookies();
						return bolsaAPI.getBolsasByLaboratorio(cookies.id);
					}
				}
			});
			
			$routeProvider.when('/detalhesBolsa/:id', {
				templateUrl : 'view/bolsa/detalhes.html',
				controller : 'bolsacontroller',
				authorize : true, 
				resolve : {
					tipos : function() {
						return "";
					},
					cookieLab : function(authService){
				    	var cookies = authService.getCookies();
				    	if (cookies === undefined || cookies==""){
				    		return "";
				    	}
				    	return cookies ;
				    },
				    agendas : function(authService,agendaAPI){
				    	return "";
				    },
				    
				    bolsa : function(bolsaAPI, $route) {
						return bolsaAPI
								.getBolsaByID($route.current.params.id);
					},
					bolsas : function(authService,bolsaAPI){
						return "";
					}
				}
			});
			
			
			$routeProvider.when('/agendaPorLaboratorio', {
				templateUrl : 'view/agenda/agendaPorLaboratorio.html',
				controller : 'bolsacontroller',
				authorize : true, 
				resolve : {
					tipos : function() {
						return "";
					},
				    cookieLab : function(authService){
				       	return "" ;
				    },
					agendas : function(authService,agendaAPI){
						var cookies = authService.getCookies();
						return agendaAPI.getAgendasPorLaboratorio(cookies.id);		
					},
					bolsa : function(bolsaAPI, $route) {
						return "";
					},
					bolsas : function(authService,bolsaAPI){
						return "";
					}
				}
			});


			$routeProvider.when('/login', {
				templateUrl : 'view/auth/login.html',
				controller : 'authcontroller',
				authorize : false
			});
			
			$routeProvider.when('/logout', {
				templateUrl : 'view/auth/logout.html',
				controller : 'authcontroller',
				authorize : false,
				resolve:{
					logout: function(authService){
						authService.removeCookies();
					}
				}
			});

			$routeProvider.when('/error', {
				templateUrl : 'view/errors/error.html',
			});
			
			$routeProvider.when('/404', {
				templateUrl : 'view/errors/404.html',
			});

			$routeProvider.otherwise({
				redirectTo : '/'
			});
		});
