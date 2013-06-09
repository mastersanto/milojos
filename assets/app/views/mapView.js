define(['underscore', 'backbone', 'collections/markersCollection'], function(_, Backbone, MarkersCollection) {

  return Backbone.View.extend({
    userPosition: null,

    events: {
        'click #reportsBtn':'viewReports',
        'click #reportBtn':'addReport'
    },

    initialize: function(){
      this.$el = $('#map-container');
      navigator.geolocation.getCurrentPosition( _.bind(this.mapInit, this) );
      this.collection = new MarkersCollection();
      this.listenTo(this.collection, 'add', this.addMarkers);
    },
    mapInit:function(currentPosition){
      this.userPosition = currentPosition;
      this.collection.fetch();
    },

    addMarkers: function () {
      var coords = new google.maps.LatLng(this.userPosition.coords.latitude, this.userPosition.coords.longitude),
        mapOptions = {
          center: coords,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
        marker = new google.maps.Marker({
          position:  coords,
          map: map,
          title: 'test'
        });


        this.collection.forEach(function(issue) {
          new google.maps.Marker({
            position: new google.maps.LatLng(issue.get('lat'), issue.get('lng')),
            map: map,
            title: 'test'
          });
        });
    }
  });
});
