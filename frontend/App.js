(function (window) {
	'use strict';

	function App() {
		this.clientListController = new app.ClientListController();
		this.clientListController.list();
	}

	App.backendUrl = 'http://localhost:8080';

	window.app = App;

}(window));