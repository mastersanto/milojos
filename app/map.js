mil.mapModule = {
	init:function(){
		console.log('gmaps started!');
		navigator.geolocation.getCurrentPosition(this.mapInit);
		//this.mapInit();
	},
	mapInit:function(currentPosition){
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

		console.log(currentPosition);
		console.log(coords);
	}
}