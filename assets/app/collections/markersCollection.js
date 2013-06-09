define(['backbone', 'models/markerModel'], function(Backbone, MarkerModel) {
  return Backbone.Collection.extend({
    model: MarkerModel,
    url:' api/issues'
  });
});
