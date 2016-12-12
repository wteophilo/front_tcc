angular.module("app").factory("doadorAPI", function ($http, config) {
	var _getDoadores = function () {
		return $http.get(config.baseUrlDoador + "/lista");
	};

	var _getDoadorByRg = function(rg){
		return $http.get(config.baseUrlDoador+"/buscaPorRg/"+rg);
	}

	var _getDoadorByID = function (id) {
		return $http.get(config.baseUrlDoador + "/buscaPorID/"+id);
	};

	var _updateDoadorByID = function (id) {
		return $http.put(config.baseUrlDoador + "/atualizaPorID/"+id);
	};

	var _deleteDoadorByID = function (id) {
		return $http.delete(config.baseUrlDoador + "/deletaPorID/"+id);
	};

	var _saveDoador = function (doador) {
		return $http.post(config.baseUrlDoador + "/", doador);
	};

	return {
		getDoadores: _getDoadores,
		getDoadorByRg: _getDoadorByRg,
		getDoadorByID: _getDoadorByID,
		updateDoadorByID: _updateDoadorByID,
		deleteDoadorByID: _deleteDoadorByID,
		saveDoador: _saveDoador
	};
});
