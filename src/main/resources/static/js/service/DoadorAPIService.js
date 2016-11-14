angular.module("app").factory("doadorAPI", function ($http, config) {
	var _getDoador = function () {
		return $http.get(config.baseUrlDoador + "/lista");
	};

	var _getDoadorByID = function (id) {
		return $http.get(config.baseUrlDoador + "/{id}");
	};

	var _updateDoadorByID = function (id) {
		return $http.put(config.baseUrlDoador + "/{id}");
	};

	var _deleteDoadorByID = function (id) {
		return $http.delete(config.baseUrlDoador + "/{id}");
	};

	var _saveDoador = function (doador) {
		return $http.post(config.baseUrlDoador + "/", doador);
	};

	return {
		getDoador: _getDoador,
		getDoadorByID: _getDoadorByID,
		updateDoadorByID: _updateDoadorByID,
		deleteDoadorByID: _deleteDoadorByID,
		saveDoador: _saveDoador
	};
});
