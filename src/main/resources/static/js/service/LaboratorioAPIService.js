angular.module("app").factory("laboratorioAPI", function ($http, config) {
	var _getLaboratorios = function () {
		return $http.get(config.baseUrlLaboratorio + "/lista");
	};

	var _getLaboratorioByID = function (id) {
		return $http.get(config.baseUrlLaboratorio + "/buscaPorID/"+id);
	};
	var _getLaboratorioByCnpj= function(cnpj){
		return http.get(config.baseUrlLaboratorio +"/buscaPorCnpj/"+cnpj);
	}

	var _updateLaboratorioByID = function (id) {
		return $http.put(config.baseUrlLaboratorio + "/atualizaPorID/"+id);
	};
	
	var _deleteLaboratorioByID = function (id) {
		return $http.delete(config.baseUrlLaboratorio + "/deletaPorID/"+id);
	};

	var _saveLaboratorio = function (laboratorio) {
		return $http.post(config.baseUrlLaboratorio + "/", laboratorio);
	};

	return {
		getLaboratorios: _getLaboratorios,
		getLaboratorioByCnpj: _getLaboratorioByCnpj,
		getLaboratorioByID: _getLaboratorioByID,
		updateLaboratorioByID: _updateLaboratorioByID,
		deleteLaboratorioByID: _deleteLaboratorioByID,
		saveLaboratorio: _saveLaboratorio
	};
});
