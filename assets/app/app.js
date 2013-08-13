define('app', [
  'underscore',
  'marionette'

], function(
  _,
  Marionette,

  MapView,
  CategoriesView
) {

  Deferred.installInto(Zepto);

  var APIURL = '/api/';
  var app = new Marionette.Application();

  app.api = function(url) {
    return APIURL + url;
  };

  return app;
});
