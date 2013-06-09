define([
	'underscore',
	'backbone',
	'text!templates/sendIssue.tpl'
	], function(_, Backbone, sendIssueTpl) {
	return Backbone.View.extend({
		el: '#sendIssues',

		initialize: function () {
			this.render();
		},

		render: function () {
			var template = _.template(sendIssueTpl);
			this.$el.html(template);
		}
	});
});
