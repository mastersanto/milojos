define([
  'backbone',
  'views/mapView',
  'views/actionsView',
  'views/sendIssueView'

  ], function(Backbone, MapView, ActionsView, SendIssue) {
  return Backbone.Router.extend({
    routes: {
      '': 'showMain'
    },

    defaultAction: function(actions){
      this.showMain();
    },

    showMain:function(actions){
      console.log('show main!!!');
      new MapView();
      new ActionsView();
      new SendIssue();
    }
  });
});
