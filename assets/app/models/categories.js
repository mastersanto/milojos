define([
  'backbone',

  'app'

], function(
  Backbone,
  app

) {
  return Backbone.Model.extend({
    url: app.api('categories')
  });
});
