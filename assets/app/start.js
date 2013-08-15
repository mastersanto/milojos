require([
  'app',

  'collections/categories',

  'views/map/map',
  'views/categories/list',
  'views/filters/list'
], function(
  app,

  categoriesList,

  MapView,
  CategoriesListView,
  FiltersListView
) {

  app.addRegions({
    header: 'header',
    map: '#map-wrapper',
    categories: '#categories-menu',
    filters: '#filters-wrapper'
  });

  app.addInitializer(function() {
    var map = new MapView();
    var categories = new CategoriesListView({collection: categoriesList});
    var filters = new FiltersListView({collection: categoriesList});

    app.map.show(map);
    app.categories.show(categories);
    app.filters.show(filters);
  });

  app.start();
});
