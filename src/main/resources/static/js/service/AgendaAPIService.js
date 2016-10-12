angular.module("app").factory("agendaAPI", function ($http, config) {
	var _getAgenda = function () {
		return $http.get(config.baseUrlAgenda + "/lista");
	};

	var _getAgendaByID = function (id) {
		return $http.get(config.baseUrlAgenda + "/{id}");
	};

	var _updateAgendaByID = function (id) {
		return $http.put(config.baseUrlAgenda + "/{id}");
	};

	var _deleteAgendaByID = function (id) {
		return $http.delete(config.baseUrlAgenda + "/{id}");
	};

	var _saveAgenda = function (agenda) {
		return $http.post(config.baseUrlAgenda + "/", agenda);
	};

	return {
		getAgenda: _getAgenda,
		getAgendaByID: _getAgendaByID,
		updateAgendaByID: _updateAgendaByID,
		deleteAgendaByID: _deleteAgendaByID,
		saveAgenda: _saveAgenda
	};
});
