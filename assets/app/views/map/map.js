define([
  'marionette',
  'underscore',

  'utils/tpl',

  'collections/issues'

], function(
  Marionette,
  _,

  tpl,

  issues

  ) {

  return Marionette.ItemView.extend({
    template: tpl('map/templates/map.html'),

    initialize: function() {
      this.collection = new issues();
    },

    onRender: function() {
      navigator.geolocation.getCurrentPosition( _.bind(this.mapInit, this) );
    },

    mapInit:function(currentPosition){
      var coords;
      var params = {
        lat: currentPosition.coords.latitude,
        lng: currentPosition.coords.longitude
      };

      this.userPosition = currentPosition;
      coords = new google.maps.LatLng(params.lat, params.lng);

      this.map = new google.maps.Map(this.$el[0], {
        center: coords,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.collection.fetch({data: $.param(params)})
                     .then(_.bind(this.addMarkers, this));
    },

    addMarkers: function () {
      var map = this.map;

      this.collection.forEach(function(issue) {
        var loc = issue.get('loc');
        new google.maps.Marker({
          position: new google.maps.LatLng(loc.lat, loc.lng),
          map: map,
          title: issue.get('title')
        });
      });
    }
  });

});
