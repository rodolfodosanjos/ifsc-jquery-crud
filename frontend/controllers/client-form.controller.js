(function (app) {
	'use strict';

	function ClientFormController() {}

	ClientFormController.prototype.viewName = 'client-form';
	ClientFormController.prototype.clientFormElementSelector = '#client-form';

	ClientFormController.prototype.openForm = function(id, event) {
		var self = this;
		var client;
		var promise = app.router.changePage(self.viewName);
		
		promise.then(function () {
			if (id) {
				promise = app.clientFormService.get(id);
				promise.then(function (client) {
					$('#client-name').val(client.nome);
				});
			}
			$(self.clientFormElementSelector +' #save-client').on('click', self.save.bind(self, id));
		});
	};

	ClientFormController.prototype.save = function(id, event) {
		var name = $('#client-name').val();
		var client = {
			id: id,
			nome: name
		};
		this.sendSave(client);
	};

	ClientFormController.prototype.sendSave = function(client) {
		var self = this;
		var promise;

		if (client.id)
			promise = app.clientFormService.update(client);
		else
			promise = app.clientFormService.create(client);

		promise.then(function () {
			self.goToList();
		});
	};

	ClientFormController.prototype.goToList = function () {
		app.clientListController = new app.ClientListController();
		app.clientListController.list();
	};

	app.ClientFormController = ClientFormController;

}(window.app));