var MarkersCollection = Backbone.Collection.extend({
  model: MarkerModel,
  url:'data/markers.json'
});