require([
  'app',

  'collections/categories',

  'views/map/map',
  'views/categories/list'
], function(
  app,

  categoriesList,

  MapView,
  CategoriesListView
) {

  app.addRegions({
    header: 'header',
    map: '#map-wrapper',
    categories: '#categories-menu'
  });

  app.addInitializer(function() {
    var categories = new CategoriesListView({collection: categoriesList});
    var map = new MapView();

    app.map.show(map);
    app.categories.show(categories);
  });

  app.start();
});
