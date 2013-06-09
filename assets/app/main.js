require(['backbone', 'router'], function (Backbone, Router) {
	'use strict';

	var router = new Router();
	Backbone.history.start();

	$('#reportsBtn').bind('click',
	      function(e){
	       $('#menu').toggle();

	      }
	);
});
