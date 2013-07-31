define([
	'underscore',
	'backbone',
	'text!templates/navControls.tpl'
	], function(_, Backbone, navControlsTpl) {
	return Backbone.View.extend({
		el: '#navControls',

		initialize: function () {
			this.render();
		},

		render: function () {
			var template = _.template(navControlsTpl);
			this.$el.html(template);
		}
	});
});
