define([
  'backbone',

  'app'

], function(
  Backbone,
  app

) {
  return Backbone.Collection.extend({
    url: app.api('issues')
  });
});
