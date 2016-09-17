(function (app) {
	'use strict';

	var ClientListService = {
		list: function() {
			return $.ajax({
				method: 'GET',
				url: app.backendUrl + '/clientes'
			});
		}
	};

	app.ClientListService = ClientListService;

}(window.app));