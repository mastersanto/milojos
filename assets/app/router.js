define(['backbone', 'views/mapView', 'views/actionsView'], function(Backbone, MapView, ActionsView) {
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
    }
  });
});
