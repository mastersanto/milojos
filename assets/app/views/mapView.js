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

    events: {
        'click #reportsBtn':'viewReports',
        'click #reportBtn':'addReport'
    },

    el: '#map-container',

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
        map = new google.maps.Map(this.$('#map-canvas')[0], {
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
    },

    viewReports: function (e) {
      var button = $(e.currentTarget),
          submenu = button.next('.submenu');
      $('.mainAction').removeClass('active');
      button.addClass('active');
      $('.submenu').hide();
      submenu.show();
    },

    addReport: function (e) {
      var button = $(e.currentTarget),
          submenu = button.next('.submenu');
      $('.mainAction').removeClass('active');
      button.addClass('active');
      $('.submenu').hide();
      submenu.show();
    }

  });
});
