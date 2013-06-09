define([
  'underscore',
  'backbone',
  'collections/markersCollection'],
  function(
    _,
    Backbone,
    MarkersCollection) {

  return Backbone.View.extend({
    userPosition: null,

    el: '#map-canvas',

    initialize: function(){
      navigator.geolocation.getCurrentPosition( _.bind(this.mapInit, this) );
      this.collection = new MarkersCollection();
      this.listenTo(this.collection, 'add', this.addMarkers);
    },

    mapInit:function(currentPosition){
      this.userPosition = currentPosition;
      this.collection.fetch();
    },

    addMarkers: function () {
      var coords = new google.maps.LatLng(
          this.userPosition.coords.latitude,
          this.userPosition.coords.longitude
        ),
        map = new google.maps.Map(this.$el[0], {
          center: coords,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

      this.collection.forEach(function(issue) {
        new google.maps.Marker({
          position: new google.maps.LatLng(issue.get('lat'), issue.get('lng')),
          map: map,
          title: issue.get('title'),
          icon: 'assets/css/images/' + issue.get('marker')
        });
      });
    }
  });
});
