angular.module("app").factory("laboratorioAPI", function ($http, config) {
	var _getLaboratorios = function () {
		return $http.get(config.baseUrlLaboratorio + "/lista");
	};

	var _getLaboratorioByID = function (id) {
		return $http.get(config.baseUrlLaboratorio + "/{id}");
	};

	var _updateLaboratorioByID = function (id) {
		return $http.put(config.baseUrlLaboratorio + "/{id}");
	};

	var _deleteLaboratorioByID = function (id) {
		return $http.delete(config.baseUrlLaboratorio + "/{id}");
	};

	var _saveLaboratorio = function (laboratorio) {
		return $http.post(config.baseUrlLaboratorio + "/", laboratorio);
	};

	return {
		getLaboratorios: _getLaboratorios,
		getLaboratorioByID: _getLaboratorioByID,
		updateLaboratorioByID: _updateLaboratorioByID,
		deleteLaboratorioByID: _deleteLaboratorioByID,
		saveLaboratorio: _saveLaboratorio
	};
});
