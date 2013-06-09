define(['backbone', 'views/mapView'], function(Backbone, MapView) {
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
    }
  });
});
