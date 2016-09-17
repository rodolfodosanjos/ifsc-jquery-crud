(function (app) {
	'use strict';

	var Router = {
		pageContainerSelector: '#page-content',
		changePage: function (viewName) {
			var self = this;
			
			return $.get( "views/" + viewName + '.html', function( data ) {
				$( self.pageContainerSelector ).html( data );
			});
		}
	}

	app.router = Router;

}(window.app));