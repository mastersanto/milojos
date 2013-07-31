define(['backbone'], function(Backbone) {

	var model = Backbone.Model.extend({
		url: 'api/issues'
	});

	return new model();
});
