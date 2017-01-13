angular.module("app").factory("bolsaAPI", function ($http, config) {
	var _getBolsas = function () {
		return $http.get(config.baseUrlBolsa + "/lista");
	};
	
	var _getBolsasByLaboratorio = function(id){
		return $http.get(config.baseUrlBolsa + "/listaBolsasPorLaboratorio/"+id);
	}

	var _getBolsaByID = function (id) {
		return $http.get(config.baseUrlBolsa + "/buscaPorId/"+id);
	};

	var _updateBolsaByID = function (id) {
		return $http.put(config.baseUrlBolsa + "/atualizaPorId/"+id);
	};

	var _deleteBolsaByID = function (id) {
		return $http.delete(config.baseUrlBolsa + "/deletaPorId/"+id);
	};

	var _saveBolsa = function (bolsa) {
		return $http.post(config.baseUrlBolsa + "/", bolsa);
	};

	return {
		getBolsas: _getBolsas,
		getBolsasByLaboratorio:_getBolsasByLaboratorio,
		getBolsaByID: _getBolsaByID,
		updateBolsaByID: _updateBolsaByID,
		deleteBolsaByID: _deleteBolsaByID,
		saveBolsa: _saveBolsa
	};
});
