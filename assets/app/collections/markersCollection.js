define(['backbone', 'models/markerModel'], function(Backbone, MarkerModel) {
  return Backbone.Collection.extend({
    model: MarkerModel,
    url:' api/issues',

    markers: {
    	'RAPONEO': 'raponeo.png',
    	'ATRACO': 'atraco.png',
    	'ROBO-VEHICULO': 'roboAuto.png',
    	'PASEO-MILLONARIO': 'paseoMillonario.png',
    	'ROBO-RESIDENCIA': 'roboResidencia.png'
    },

    parse: function (issues) {
    	var issue;

    	for(var i = 0, l = issues.length; i < l; i++) {
    		issue = issues[i];
    		issue.marker = this.markers[issue.type];
    	}

    	return issues;
    }
  });
});
