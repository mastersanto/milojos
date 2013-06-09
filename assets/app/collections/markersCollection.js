define(['backbone', 'models/MarkerModel'], function(Backbone, MarkerModel) {
  return Backbone.Collection.extend({
    model: MarkerModel,
    url:' api/issues'
  });
});
