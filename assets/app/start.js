require([
  'app',

  'views/map/map',
  'views/categories/list'
], function(
  app,
  MapView,
  CategoriesView
) {

  app.addInitializer(function() {
    new MapView();
    new CategoriesView();
  });

  app.start();
});
