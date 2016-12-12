angular.module("app").factory("agendaAPI", function ($http, config) {
	var _getAgendas = function () {
		return $http.get(config.baseUrlAgenda + "/lista");
	};

	var _getProtocolo = function(protocolo){
		return $http.get(config.baseUrlAgenda+"/buscaPorProtocolo/"+protocolo);
	}

	var _getAgendaByID = function (id) {
		return $http.get(config.baseUrlAgenda + "/buscaPorId/"+id);
	};

	var _updateAgendaByID = function (id) {
		return $http.put(config.baseUrlAgenda + "/atualizaPorId/"+id);
	};

	var _deleteAgendaByID = function (id) {
		return $http.delete(config.baseUrlAgenda + "/deletaPorId/"+id);
	};

	var _saveAgenda = function (agenda) {
		return $http.post(config.baseUrlAgenda + "/", agenda);
	};

	return {
		getAgendas: _getAgendas,
		getProtocolo: _getProtocolo,
		getAgendaByID: _getAgendaByID,
		updateAgendaByID: _updateAgendaByID,
		deleteAgendaByID: _deleteAgendaByID,
		saveAgenda: _saveAgenda
	};
});
