(function (app) {
	'use strict';

	function ClientListController() {}

	ClientListController.prototype.viewName = 'client-list';

	ClientListController.prototype.list = function() {
		var self = this;
		var promise = app.router.changePage(self.viewName);

		promise.then(function () {
			promise = app.ClientListService.list();
			promise.then(function (clients) {
				$('#clients').html('');
				if (clients && clients.length)
					clients.forEach(self._appendClientElementsInList.bind(self));
				$('#create-client').on('click', self.goToForm.bind(self, undefined));
			});
		});
	};

	ClientListController.prototype._appendClientElementsInList = function (client) {
		var self = this;

		$('#clients').append(self._getClientElement(client));
		$('#client' + client.id).on('click', function() {
			self.goToForm(client.id.replace('client', ''));
		});
	};

	ClientListController.prototype._getClientElement = function (client) {
		return '<button type="button" class="list-group-item" id=client' + client.id + '>' + client.nome + '</button>';
	};

	ClientListController.prototype.goToForm = function (id) {
		app.clientFormController = new app.ClientFormController();
		app.clientFormController.openForm(id);
	};

	app.ClientListController = ClientListController;

}(window.app));