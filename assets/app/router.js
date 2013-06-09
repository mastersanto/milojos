define([
  'backbone',
  'views/mapView',
  'views/actionsView',
  'views/sendIssueView',
  'views/navControlsView'

  ], function(Backbone, MapView, ActionsView, SendIssue, NavControls) {
  return Backbone.Router.extend({
    views: {},

    routes: {
      '': 'showMain',
      'issue/report/:type': 'reportIssue'
    },

    defaultAction: function(actions){
      this.showMain();
    },

    showMain:function(actions){
      this.views.map = new MapView();
      this.views.actions = new ActionsView();
    },

    reportIssue: function (type) {
      new NavControls();
      this.views.actions.remove();
    }
  });
});
