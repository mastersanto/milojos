var MapView = Backbone.View.extend({
  //tagName:'div', 
  events: {
      //'click #btnAddPlayer':'addPlayer'
  },  

  initialize: function(){
    this.$el = $('#map-canvas');
    console.log('mapView!!');
    navigator.geolocation.getCurrentPosition(this.mapInit);
    //this.listenTo(this.collection, 'add', this.addMarker);
    //this.model.bind('reset', this.render, this);
  },
  mapInit:function(currentPosition){
    console.log('mapView!!');
    var coords = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude),
      mapOptions = {
        center: coords,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        /*
        zoom: 15,
        //center: reslong,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
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
      });

    google.maps.event.addDomListener(window, 'load', initialize);

    //console.log(currentPosition);
    //console.log(coords);
    //return this;
  },

  addMarker: function(e){
    //this.$el.append(this.template({data:this.collection.toJSON()}));

    //var view = new TodoView({model: todo});
    //this.$("#todo-list").append(view.render().el);
  },
  /*
  addPlayer: function(e){
    e.preventDefault();
    var playerNum = this.collection.length+1;
    var data = [{'id': playerNum, 'name': 'Player '+playerNum}];
    this.collection.add(data);
    console.log(this.collection.length);
    console.log('Add Player');
    console.log(this.collection);
    console.log(data);
    //var view = new TodoView({model: todo});
    //this.$("#todo-list").append(view.render().el);
    //var player = new Player(data);
    //player.save();
    //this.collection.add(player);
    //return this.collection.add(data);
    //console.log('Added');
    //console.log(this.collection);
  },

  update:function(){
    //set callback of the event "fetchCompleted:Books" 
    this.collection.bind('fetchCompleted:Players',this.render,this);
    this.collection.fetch();
  },

  //template: _.template(playersViewTemplate),

  render: function(){

    _.each(this.model.models, function (player) {
        $(this.el).append(new playerView({model:player}).render().el);
    }, this);
    return this;
  }*/
});