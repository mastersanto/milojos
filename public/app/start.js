require([
  'app',

  'collections/categories',

  'views/header/header',
  'views/map/map',
  'views/categories/list',
  'views/filters/list',
  'views/settings/settings'
], function(
  app,

  categoriesList,

  HeaderView,
  MapView,
  CategoriesListView,
  FiltersListView,
  SettingsView
) {

  app.addRegions({
    header: 'header',
    map: '#map-wrapper',
    categories: '#categories-menu',
    filters: '#filters-wrapper',
    settings: '#settings-wrapper'
  });

  app.addInitializer(function() {
    var header = new HeaderView();
    var map = new MapView();
    var categories = new CategoriesListView({collection: categoriesList});
    var filters = new FiltersListView({collection: categoriesList});
    var settings = new SettingsView();

    app.header.show(header);
    app.map.show(map);
    app.categories.show(categories);
    app.filters.show(filters);
    app.settings.show(settings);
  });

  app.start();
});
