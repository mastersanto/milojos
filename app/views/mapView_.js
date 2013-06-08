var markersView = Backbone.View.extend({
  tagName:'ul', 
  className:'vlist',
  events: {
      //'click #btnAddPlayer':'addPlayer'
  },  

  initialize: function(){
    this.$el = $('#map-canvas');
    this.listenTo(this.collection, 'add', this.renderPlayer);
    //this.listenTo(this.collection, 'add', this.update);
    this.model.bind('reset', this.render, this);
  },

  renderMarker: function(e){
    console.log('+++++++ Render Add Player');
    this.$el.empty();
    this.$el.append(this.template({data:this.collection.toJSON()}));

    //var view = new TodoView({model: todo});
    //this.$("#todo-list").append(view.render().el);
  },

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
    /*
    this.$el.empty();
    //compile template using the data fetched by collection
    this.$el.append(this.template({data:this.collection.toJSON()}));
    this.trigger("renderCompleted:Players",this);
    return this;   */ 

    _.each(this.model.models, function (player) {
        $(this.el).append(new playerView({model:player}).render().el);
    }, this);
    return this;
  }
});