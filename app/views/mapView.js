var MapView = Backbone.View.extend({
  //tagName:'div', 
  events: {
      'click #reportsBtn':'viewReports',
      'click #reportBtn':'addReport'     
  },  

  initialize: function(){
    this.$el = $('#map-container');
    console.log('mapView!!');
    navigator.geolocation.getCurrentPosition(this.mapInit);
    //this.listenTo(this.collection, 'add', this.addMarker);
    //this.model.bind('reset', this.render, this);
  },
  mapInit:function(currentPosition){
    var coords = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude),
      mapOptions = {
        center: coords,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        /*
        draggable: true,
        keyboardShortcuts: false,
        mapTypeControl: false,
        mapTypeControlOptions: false,
        overviewMapControlOptions: false,
        scaleControlOptions: false,
        zoomControlOptions: false,
        scrollwheel: true*/
      },
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
      marker = new google.maps.Marker({
        position:  coords,
        map: map,
        title: 'test'
      }),
      availableReports = new MarkersCollection();

    availableReports.fetch();

    console.log(availableReports);
    //google.maps.event.addDomListener(window, 'load', initialize);
    //return this;
  },

  addReport: function(e){
    e.preventDefault();
    console.log('==> add report');
  },

  viewReports: function(e){
    e.preventDefault();
    console.log('==> view reports');
  }
});