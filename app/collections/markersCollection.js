var Markers = Backbone.Collection.extend({
  model: Marker,
  //fetch data from players.json using Ajax 
  //and then dispatch customized event "fetchCompleted:Players"
  fetch:function(){
    var self=this;
    var tmpItem;
    //fetch the data using ajax
    var jqxhr = $.getJSON("data/markers.json")
      .success(function(data, status, xhr) { 
        $.each(data, function(i,item){
          //create player for each item and then insert into the collection
          tmpItem=new Marker({
            id:item.id,
            type:item.type,
            title:item.title,
            description:item.description,
            latitude:item.latitude,
            longitude:item.longitude
          });
          self.add(tmpItem);
        });
        //dispatch customized event
        self.trigger("fetchCompleted:Markers");
      })
      .error(function() { alert("error"); })
      .complete(function() {
            console.log("fetch complete + " + this);
      });
  }
});