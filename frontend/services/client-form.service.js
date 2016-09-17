(function (app) {
	'use strict';

	var ClientFormService = {
		get: function(id) {
			return $.ajax({
				method: 'GET',
				url: app.backendUrl + '/clientes/' + id
			});
		},
		create: function(client) {
			return $.ajax({
				method: 'POST',
				url: app.backendUrl + '/clientes',
				contentType: "application/json",
				data: JSON.stringify(client)
			});
		},
		update: function(client) {
			return $.ajax({
				method: 'PUT',
				url: app.backendUrl + '/clientes',
				contentType: "application/json",
				data: JSON.stringify(client)
			});
		}
	};

	app.ClientFormService = ClientFormService;

}(window.app));